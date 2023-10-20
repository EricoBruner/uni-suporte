import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { STUDENTS } from "../data/students";
import RatingStars from "../components/RatingStars";
import { SUPPORTS } from "../data/supports";
import RequestSupportModal from "../components/Modals/RequestSupportModal";
import { useState } from "react";
import { SUBJECTS } from "../data/subjects";

export default function ProfilePage() {
  const { id } = useParams();
  const [subject, setSubject] = useState<any>([]);

  const student = STUDENTS.find((s) => s.id === parseInt(id as string));

  const filterSupports = SUPPORTS.filter(
    (support) => support.studentId === student?.id
  );

  const supports = filterSupports.map((support) => {
    const stu = STUDENTS.find((student) => student.id === support.studentId);
    const su = SUBJECTS.find((s) => s.id === support.subjectId);

    return {
      supportId: support.id,
      student: stu ? stu : null,
      subject: su ? su : null,
    };
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (subject: any) => {
    setSubject(subject);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  console.log(subject);

  return (
    <>
      <Header />
      <SCContainer>
        <SCInfo>
          <div>
            <h1>{student?.name}</h1>
            <div>
              <strong>Formação:</strong>
              <h2>{student?.formation}</h2>
            </div>
            <div>
              <strong>Disponibilidade:</strong>
              <h2>{student?.availability}</h2>
            </div>
            <div>
              <strong>Celular:</strong>
              <h2>{student?.number}</h2>
            </div>
            <div>
              <strong>Avaliação:</strong>
              <RatingStars rating={student?.rating} />
            </div>
          </div>
          <img src={student?.image} alt="perfil image" />
        </SCInfo>

        <strong>Matérias que {student?.name} está apto(a)!</strong>
        <SCCardList>
          {supports.map((support) => {
            return (
              <SCCard key={support.supportId}>
                <div>
                  <div>
                    <strong>Suporte:</strong>
                    <h1>{support.subject?.name}</h1>
                  </div>
                  <div>
                    <strong>Formação:</strong>
                    <h2>{support.student?.formation}</h2>
                  </div>
                </div>
                <SCButton onClick={() => openModal(support.subject)}>
                  solicitar suporte
                </SCButton>
              </SCCard>
            );
          })}
        </SCCardList>
      </SCContainer>
      <RequestSupportModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        studentId={student?.id}
        subject={subject}
      />
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
