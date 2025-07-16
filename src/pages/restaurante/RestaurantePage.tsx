import { useEffect, useState } from 'react'
import { Locais, Visualizar } from './styled'
import { Modal } from '../../components/carrinho/Modal'
import { Header } from '../../components/header/Header'
import { api } from '../../services/api'

// Tipos – extraia para types.ts se preferir
export interface Restaurante {
  id: number
  titulo: string
  capa: string
  tipo: string
  destacado: boolean
}

export function RestaurantesPage() {
  //  estados tipados
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [modalOpen, setModalOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartOpen, setCartOpen] = useState(false) // estava com vírgula “,” antes
  const [restauranteSelecionado, setRestauranteSelecionado] =
    useState<Restaurante | null>(null)

  //  efeito com tratamento de erro & loading
  useEffect(() => {
    setLoading(true)
    api
      .get<Restaurante[]>('/restaurantes') // agora usa o service
      .then((res) => setRestaurantes(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const abrirModal = (r: Restaurante) => {
    setRestauranteSelecionado(r)
    setModalOpen(true)
  }

  //  early‑return UX
  if (loading) return <p>Carregando restaurantes…</p>
  if (error)   return <p>Erro ao buscar restaurantes: {error}</p>

  return (
    <>
      <Header setCartOpen={setCartOpen} />

      <Locais>
        {restaurantes.map((r) => (
          <div key={r.id} className="saiba-mais">
            <h3>{r.titulo}</h3>
            <img src={r.capa} alt={r.titulo} width={300} />
            <p>{r.tipo}</p>
            <button onClick={() => abrirModal(r)}>ver mais</button>
          </div>
        ))}
      </Locais>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {restauranteSelecionado && (
          <Visualizar>
            <h2>{restauranteSelecionado.titulo}</h2>
            <img
              src={restauranteSelecionado.capa}
              alt={restauranteSelecionado.titulo}
              width="100%"
            />
            <p>{restauranteSelecionado.tipo}</p>
          </Visualizar>
        )}
      </Modal>
    </>
  )
}
