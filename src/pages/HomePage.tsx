import styled from "styled-components";
import Header from "../components/Header";
import SubjectSelector from "../components/SubjectSelector";

export default function HomePage() {
  return (
    <>
      <Header />
      <SCContainer>
        <strong>Bem-vindo(a), Fulano! 👋</strong>

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
  box-sizing: border-box;

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
