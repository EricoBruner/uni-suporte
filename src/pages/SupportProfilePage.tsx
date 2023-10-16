import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { STUDENTSUPPORT } from "../data/studentSupport";
import RatingStars from "../components/RatingStars";
import { SUPPORTOPTIONS } from "../data/supportOptionsBySubject";

export default function SupportProfilePage() {
  const { subject, userId } = useParams();

  const user = STUDENTSUPPORT.find((s) => s.id === parseInt(userId as string));

  const filterSubjects = SUPPORTOPTIONS.filter((materia) => {
    if (materia.suportOptions) {
      materia.suportOptions = materia.suportOptions.filter(
        (option: any) => option.id === parseInt(userId as string)
      );
      return materia.suportOptions.length > 0; // Retorna verdadeiro se houver suportOptions após a filtragem
    }
    return false;
  });

  console.log(userId);

  return (
    <>
      <Header />
      <SCContainer>
        <h1>{subject}</h1>
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

        <strong>Matérias que {user?.name} está apto(a)!</strong>
        <SCCardList>
          {filterSubjects.map((subject) => {
            return subject.suportOptions?.map((suportOption) => {
              return (
                <SCCard key={suportOption.id}>
                  <div>
                    <div>
                      <strong>Suporte:</strong>
                      <h1>{subject.name}</h1>
                    </div>
                    <div>
                      <strong>Formação:</strong>
                      <h2>{suportOption.formation}</h2>
                    </div>
                  </div>
                  <SCButton>solicitar suporte</SCButton>
                </SCCard>
              );
            });
          })}
        </SCCardList>
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

  > h1 {
    color: #417799;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 60px;
  }

  > strong {
    margin-top: 10px;
    color: #292929;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`;

const SCInfo = styled.div`
  display: flex;
  box-sizing: border-box;
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

const SCCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 50px;
  gap: 15px;
`;

const SCCard = styled.div`
  width: 250px;
  height: 200px;
  background: #f8f6f8;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  > div {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    gap: 10px;

    > div > strong {
      color: #292929;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }

    > div > h1 {
      margin-top: 7px;
      color: #000;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
    }

    > div > h2 {
      margin-top: 7px;
      color: #000;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
    }
  }
`;

const SCButton = styled.button`
  border-radius: 4px;
  background: #27658c;
  height: 40px;
  width: 100%;
  border: none;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;
