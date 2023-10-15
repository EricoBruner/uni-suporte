import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { STUDENTSUPPORT } from "../data/studentSupport";
import RatingStars from "../components/RatingStars";

export default function SupportProfilePage() {
  const { userId } = useParams();

  const user = STUDENTSUPPORT.find((s) => s.id === parseInt(userId as string));

  return (
    <>
      <Header />
      <SCContainer>
        <SCInfo>
          <div>
            <h1>{user?.name}</h1>
            <div>
              <strong>Formação:</strong>
              <h2>{user?.formation}</h2>
            </div>
            <div>
              <strong>Disponibilidade:</strong>
              <h2>{user?.availability}</h2>
            </div>
            <div>
              <strong>Avaliação:</strong>
              <RatingStars rating={user?.rating} />
            </div>
          </div>
          <img src={user?.image} alt="perfil image" />
        </SCInfo>
      </SCContainer>
    </>
  );
}

const SCContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  > strong {
    margin-top: 60px;
    color: #292929;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
  }
`;

const SCInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  > div {
    > h1 {
      color: #292929;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 40px;
    }

    > div {
      display: flex;
      margin-bottom: 15px;
      gap: 5px;

      > strong {
        color: #292929;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
      }

      > h2 {
        color: #000;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
      }
    }
  }
`;
