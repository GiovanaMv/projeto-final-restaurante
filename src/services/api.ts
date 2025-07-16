// src/services/api.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL // 🡅 coloque essa variável no seu .env
})
