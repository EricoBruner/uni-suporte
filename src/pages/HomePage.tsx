import styled from "styled-components";
import Header from "../components/Header";
import SubjectSelector from "../components/SubjectSelector";
import { REQUESTS } from "../data/requests";

export default function HomePage() {
  console.log(REQUESTS);

  return (
    <>
      <Header />
      <SCContainer>
        <strong>Bem-vindo(a), Evelyn! 👋</strong>

        <label>Selecione a matéria a qual deseja obter suporte</label>
        <SubjectSelector />
      </SCContainer>
    </>
  );
}

const SCContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 150px;
  display: flex;
  flex-direction: column;

  > strong {
    color: #292929;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }

  > label {
    color: #292929;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 10px;
  }
`;
