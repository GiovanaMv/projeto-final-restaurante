import styled from 'styled-components';

const Locais = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 24px;
  margin-left: 204px;
  margin-top: 24px;
  margin-bottom: 24px;

  .saiba-mais {
  border: 3px solid #E66767;
  color: #E66767;
  text-align: center;
  padding: 12px;

  img{
  width: 200px;
  height: 150px;
  object-fit: cover;
  margin-top: 12px;
  }

  h3{
  font-size: 1.3rem;
  font-weight: bold;
  }

  button {
  background-color: #E66767;
  border: none;
  color: white;
  font-size: 14px;
  padding: 3px;
  }

  p {
  margin-top: 12px;
  }
  }
`;

const Visualizar = styled.div`
color: #E66767;
text-align: center;
`;