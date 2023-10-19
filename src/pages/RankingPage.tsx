import styled from "styled-components";
import Header from "../components/Header";
import SubjectSelector from "../components/SubjectSelector";

export default function RankingPage() {
  return (
    <>
      <Header />
      <SCContainer>
        <strong>Ranking...</strong>

        <label>Esta pagina ainda não está disponivel</label>
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
