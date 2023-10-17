import styled from "styled-components";
import Header from "../components/Header";
import { MYSUPPORTS } from "../data/mySupports";
import { STUDENTS } from "../data/students";
import { SUBJECTS } from "../data/subjects";

export default function MySupportsPage() {
  const supports = MYSUPPORTS.map((support) => {
    const studentSuport = STUDENTS.find(
      (student) => student.id === support.studentSuportId
    );
    const subject = SUBJECTS.find(
      (subject) => subject.id === support.subjectId
    );

    return {
      ...support,
      studentSuport,
      subject,
    };
  });

  const approvedSupports = supports.filter((s) => s.status === "approved");
  const pendingSupports = supports.filter((s) => s.status === "pending");
  const finishedSupports = supports.filter((s) => s.status === "finished");

  return (
    <>
      <Header />
      <SCContainer>
        <h1>Aulas agendadas</h1>
        {approvedSupports.length != 0 ? (
          <SCCardList>
            {approvedSupports.map((support) => {
              return (
                <SCCard>
                  <strong>Suporte:</strong>
                  <h1>{support.subject?.name}</h1>
                  <div>
                    <div>
                      <strong>Data:</strong>
                      <h2>{support.date}</h2>
                    </div>
                    <div>
                      <strong>Horário:</strong>
                      <h2>{support.time}</h2>
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong>Aluno suporte:</strong>
                      <h2>{support.studentSuport?.name}</h2>
                    </div>
                    <div>
                      <strong>Contato:</strong>
                      <h2>{support.studentSuport?.number}</h2>
                    </div>
                  </div>
                </SCCard>
              );
            })}
          </SCCardList>
        ) : (
          <strong>Não há matérias aqui!</strong>
        )}
        <h1>Aguardando aprovação do aprendiz</h1>
        {pendingSupports.length != 0 ? (
          <SCCardList>
            {pendingSupports.map((support) => {
              return (
                <SCCard>
                  <strong>Suporte:</strong>
                  <h1>{support.subject?.name}</h1>
                  <div>
                    <div>
                      <strong>Data:</strong>
                      <h2>{support.date}</h2>
                    </div>
                    <div>
                      <strong>Horário:</strong>
                      <h2>{support.time}</h2>
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong>Aluno suporte:</strong>
                      <h2>{support.studentSuport?.name}</h2>
                    </div>
                    <div>
                      <strong>Contato:</strong>
                      <h2>{support.studentSuport?.number}</h2>
                    </div>
                  </div>
                </SCCard>
              );
            })}
          </SCCardList>
        ) : (
          <strong>Não há matérias aqui!</strong>
        )}
        <h1>Histórico</h1>
        {finishedSupports.length != 0 ? (
          <SCCardList>
            {finishedSupports.map((support) => {
              return (
                <SCCard>
                  <strong>Suporte:</strong>
                  <h1>{support.subject?.name}</h1>
                  <div>
                    <div>
                      <strong>Data:</strong>
                      <h2>{support.date}</h2>
                    </div>
                    <div>
                      <strong>Horário:</strong>
                      <h2>{support.time}</h2>
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong>Aluno suporte:</strong>
                      <h2>{support.studentSuport?.name}</h2>
                    </div>
                    <div>
                      <strong>Contato:</strong>
                      <h2>{support.studentSuport?.number}</h2>
                    </div>
                  </div>
                </SCCard>
              );
            })}
          </SCCardList>
        ) : (
          <strong>Não há matérias aqui!</strong>
        )}
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
    margin-bottom: 17px;
    color: #292929;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }

  > strong {
    color: #292929;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 35px;
  }
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
    width: 100%;

    > div {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
`;

const SCCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 35px;
  gap: 10px;
`;