import styled from "styled-components";
import Header from "../components/Header";
import { SUBJECTS } from "../data/subjects";
import { SUPPORTS } from "../data/supports";
import { MYSUPPORTS } from "../data/mySupports";
import { STUDENTS } from "../data/students";
import CreateSubjectModal from "../components/CreateSubjectModal";
import { useEffect, useState } from "react";
import { REQUESTS } from "../data/requests";

export default function StudentSupport() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [supports, setSupports] = useState<any>([]);
  const [supportRequests, setSupportRequests] = useState<any>([]);
  const [requests, setRequests] = useState<any>([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const deleteSupport = (id: number) => {
    SUPPORTS.splice(id, 1);

    const filterSubjects = SUPPORTS.filter(
      (support) => support.studentId === 1
    );

    const supports = filterSubjects.map((support) => {
      const subject = SUBJECTS.find(
        (subject) => subject.id === support.subjectId
      );

      if (support.studentId == 1) {
        return {
          ...support,
          subject,
        };
      }
    });

    setSupports(supports);
  };

  const toggleSupportVisibility = (id: number) => {
    const updatedSupports = SUPPORTS.map((s) => {
      if (s.id === id) {
        return { ...s, visible: !s.visible };
      }
      return s;
    });

    SUPPORTS.length = 0;
    SUPPORTS.push(...updatedSupports);

    const filterSubjects = SUPPORTS.filter(
      (support) => support.studentId === 1
    );

    const supports = filterSubjects.map((support) => {
      const subject = SUBJECTS.find(
        (subject) => subject.id === support.subjectId
      );

      if (support.studentId == 1) {
        return {
          ...support,
          subject,
        };
      }
    });

    setSupports(supports);
  };

  const acceptSupportRequest = (id: number) => {
    const updatedSupportRequest = MYSUPPORTS.map((s) => {
      if (s.id === id) {
        return { ...s, status: "approved" };
      }
      return s;
    });

    MYSUPPORTS.length = 0;
    MYSUPPORTS.push(...updatedSupportRequest);

    const filterSupports = MYSUPPORTS.filter(
      (support) => support.studentSuportId === 1 && support.status === "pending"
    );
    const supportRequests = filterSupports.map((support) => {
      const studentSuport = STUDENTS.find(
        (student) => student.id === support.studentSuportId
      );

      const student = STUDENTS.find(
        (student) => student.id === support.studentId
      );

      const subject = SUBJECTS.find(
        (subject) => subject.id === support.subjectId
      );

      return {
        ...support,
        student,
        studentSuport,
        subject,
      };
    });
    setSupportRequests(supportRequests);
  };

  const refuseSupportRequest = (id: number) => {
    const updatedSupportRequest = MYSUPPORTS.map((s) => {
      if (s.id === id) {
        return { ...s, status: "refused" };
      }
      return s;
    });

    MYSUPPORTS.length = 0;
    MYSUPPORTS.push(...updatedSupportRequest);

    const filterSupports = MYSUPPORTS.filter(
      (support) => support.studentSuportId === 1 && support.status === "pending"
    );
    const supportRequests = filterSupports.map((support) => {
      const studentSuport = STUDENTS.find(
        (student) => student.id === support.studentSuportId
      );

      const student = STUDENTS.find(
        (student) => student.id === support.studentId
      );

      const subject = SUBJECTS.find(
        (subject) => subject.id === support.subjectId
      );

      return {
        ...support,
        student,
        studentSuport,
        subject,
      };
    });
    setSupportRequests(supportRequests);
  };

  useEffect(() => {
    const filterSubjects = SUPPORTS.filter(
      (support) => support.studentId === 1
    );
    const supports = filterSubjects.map((support) => {
      const subject = SUBJECTS.find(
        (subject) => subject.id === support.subjectId
      );

      if (support.studentId == 1) {
        return {
          ...support,
          subject,
        };
      }
    });
    setSupports(supports);

    const filterSupports = MYSUPPORTS.filter(
      (support) => support.studentSuportId === 1 && support.status === "pending"
    );
    const supportRequests = filterSupports.map((support) => {
      const studentSuport = STUDENTS.find(
        (student) => student.id === support.studentSuportId
      );

      const student = STUDENTS.find(
        (student) => student.id === support.studentId
      );

      const subject = SUBJECTS.find(
        (subject) => subject.id === support.subjectId
      );

      return {
        ...support,
        student,
        studentSuport,
        subject,
      };
    });
    setSupportRequests(supportRequests);

    const filterRequests = REQUESTS.filter((r) => r.studentId === 1);
    const requests = filterRequests.map((request) => {
      const student = STUDENTS.find((s) => s.id === request.studentId);

      if (request.studentId == 1) {
        return {
          ...request,
          student,
        };
      }
    });
    setRequests(requests);
  }, [modalIsOpen]);

  console.log(supportRequests);

  return (
    <>
      <Header />
      <SCContainer>
        <div>
          <button onClick={() => openModal()}>Adicionar Matéria</button>
          <h1>Matérias</h1>
          {supports.length != 0 || requests.length != 0 ? (
            <SCCardList>
              {requests.map((request: any) => {
                console.log(request);
                return (
                  <SCSubjectCard key={request?.id}>
                    <strong>Suporte:</strong>
                    <h1>{request?.subject?.name}</h1>
                    <p>Em validação</p>
                  </SCSubjectCard>
                );
              })}
              {supports.map((subject: any) => {
                return (
                  <SCSubjectCard key={subject?.id}>
                    <strong>Suporte:</strong>
                    <h1>{subject?.subject?.name}</h1>
                    <div>
                      <button onClick={() => deleteSupport(subject?.id)}>
                        Excluir
                      </button>
                      <button
                        onClick={() => toggleSupportVisibility(subject?.id)}
                      >
                        {subject?.visible ? "Ocultar" : "Desocultar"}
                      </button>
                    </div>
                  </SCSubjectCard>
                );
              })}
            </SCCardList>
          ) : (
            <strong>Você ainda não cadastrou nenhuma matéria!</strong>
          )}
        </div>
        <div>
          <button>Solicitações</button>
          <h1>Solicitações</h1>
          {supportRequests.length != 0 ? (
            <SCCardList>
              {supportRequests.map((support: any) => {
                return (
                  <SCRequestCard key={support.id}>
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
                      <strong>Descrição:</strong>
                      <p>{support.intention}</p>
                    </div>
                    <SCButtonGroup>
                      <button onClick={() => acceptSupportRequest(support?.id)}>
                        Aceitar
                      </button>
                      <button onClick={() => refuseSupportRequest(support?.id)}>
                        Recusar
                      </button>
                    </SCButtonGroup>
                  </SCRequestCard>
                );
              })}
            </SCCardList>
          ) : (
            <strong>Não há nenhuma solicitação!</strong>
          )}
        </div>
        <div>
          <h1>Aulas Agendadas</h1>
        </div>
      </SCContainer>
      <CreateSubjectModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        studentId={1}
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
  flex-direction: row;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;

    > strong {
      color: #292929;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      margin-top: 30px;
    }

    > button {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 4px;
      background: #27658c;
      color: #fff;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      cursor: pointer;
    }

    > h1 {
      margin-top: 30px;
      color: #292929;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

const SCCardList = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 50px;
  gap: 10px;
  flex-direction: column;
`;

const SCSubjectCard = styled.div`
  width: 250px;
  height: auto;
  background: #f8f6f8;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  > p {
    margin-top: 30px;
    color: #ff3740;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
  }

  > strong {
    color: #292929;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }

  > h1 {
    margin-top: 10px;
    color: #000;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  > div {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 13px;

    > button {
      margin-top: 20px;
      width: 100%;
      height: 40px;
      color: #27658c;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      background: none;
      border-radius: 4px;
      border: 1px solid #27658c;
      cursor: pointer;
    }
  }
`;

const SCRequestCard = styled.div`
  width: 250px;
  height: auto;
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

  > strong {
    color: #292929;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }

  > h1 {
    margin-top: 10px;
    color: #000;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  > div {
    margin-top: 15px;

    > div {
      display: flex;
      gap: 5px;

      > strong {
      }
    }
  }
`;

const SCButtonGroup = styled.p`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 13px;

  > button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    color: #27658c;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    background: none;
    border-radius: 4px;
    border: 1px solid #27658c;
    cursor: pointer;
  }
`;
