import styled from "styled-components";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../components/RatingStars";
import { SUPPORTS } from "../data/supports";
import { STUDENTS } from "../data/students";
import { SUBJECTS } from "../data/subjects";

export default function SearchPage() {
  const { subject } = useParams();

  const subjectId = SUBJECTS.find((s) => s.name === String(subject));

  const filterSupports = SUPPORTS.filter((s) => s.subjectId === subjectId?.id);

  const supports = filterSupports.map((support) => {
    const student = STUDENTS.find(
      (student) => student.id === support.studentId
    );
    const subject = SUBJECTS.find(
      (subject) => subject.id === support.subjectId
    );

    return {
      supportId: support.id,
      student: student ? student : null,
      subjectName: subject ? subject.name : "Não encontrado",
    };
  });

  return (
    <>
      <Header />
      <SCContainer>
        <h1>{subject}</h1>
        <strong>
          {supports.length != 0
            ? "Alunos aptos a prestar suporte"
            : "Não há alunos cadastrados nessa matéria"}
        </strong>

        <SCCardList>
          {supports.map((support) => {
            return (
              <Link to={`/search/${subject}/profile/${support.student?.id}`}>
                <SCCard>
                  <header>
                    <img src={support.student?.image} alt="perfil image" />
                    <strong>{support.student?.name}</strong>
                  </header>
                  <div>
                    <div>
                      <strong>Suporte:</strong>
                      <h1>{support.subjectName}</h1>
                    </div>
                    <div>
                      <strong>Formação:</strong>
                      <h2>{support.student?.formation}</h2>
                    </div>
                    <SCRatingBox>
                      <strong>Avaliação:</strong>
                      <RatingStars rating={support.student?.rating} />
                    </SCRatingBox>
                  </div>
                </SCCard>
              </Link>
            );
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
  display: flex;
  flex-direction: column;

  > h1 {
    color: #417799;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  > strong {
    margin-top: 60px;
    color: #292929;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
  }
`;

const SCCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  gap: 10px;
`;

const SCCard = styled.div`
  width: 250px;
  height: 225px;
  background: #f8f6f8;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;

  > header {
    width: 100%;
    height: 27%;
    display: flex;
    align-items: center;
    background: #ff81ff;
    padding-left: 18px;
    box-sizing: border-box;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    > strong {
      margin-left: 10px;
      color: #292929;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 73%;
    padding-left: 18px;
    padding-top: 14px;
    padding-bottom: 14px;

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

const SCRatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
