import styled from "styled-components";
import Header from "../components/Header";
import { MYSUPPORTS } from "../data/mySupports";
import { STUDENTS } from "../data/students";
import { SUBJECTS } from "../data/subjects";
import { useEffect, useState } from "react";
import RequestAgainSupportModal from "../components/Modals/RequestAgainSupportModal";

export default function MySupportsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subject, setSubject] = useState<any>({});
  const [requestId, setRequestId] = useState<number>();
  const [supports, setSupports] = useState<any>([]);
  const [approvedSupports, setApprovedSupports] = useState<any>([]);
  const [pendingSupports, setPendingSupports] = useState<any>([]);
  const [finishedSupports, setFinishedSupports] = useState<any>([]);
  const [refusedSupports, setRefusedSupports] = useState<any>([]);

  const cancelSupport = (supportId: number) => {
    const updatedSupportRequest = MYSUPPORTS.map((s) => {
      if (s.id === supportId) {
        return {
          ...s,
          status: "canceled",
          justification: "Cancelada por você",
        };
      }
      return s;
    });

    MYSUPPORTS.length = 0;
    MYSUPPORTS.push(...updatedSupportRequest);

    setSupports("atualizar");
  };

  const openModal = (subject: any, requestId: number) => {
    setSubject(subject);
    setRequestId(requestId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const mapSupports = MYSUPPORTS.map((support) => {
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

    const approvedSupports = mapSupports.filter((s) => s.status === "approved");
    setApprovedSupports(approvedSupports);
    const pendingSupports = mapSupports.filter((s) => s.status === "pending");
    setPendingSupports(pendingSupports);
    const finishedSupports = mapSupports.filter((s) => s.status === "finished");
    setFinishedSupports(finishedSupports);
    const canceledSupports = mapSupports.filter((s) => s.status === "canceled");
    const refusedSupports = canceledSupports.concat(
      mapSupports.filter((s) => s.status === "refused")
    );
    setRefusedSupports(refusedSupports);
  }, [supports, modalIsOpen]);

  return (
    <>
      <Header />
      <SCContainer>
        <h1>Aulas agendadas</h1>
        {approvedSupports.length != 0 ? (
          <SCCardList>
            {approvedSupports.map((support: any) => {
              return (
                <SCCard key={support.id}>
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
                  <SCButtonGroup>
                    <button
                      onClick={() => openModal(support.subject, support.id)}
                    >
                      Reagendar
                    </button>
                    <button onClick={() => cancelSupport(support.id)}>
                      Cancelar
                    </button>
                  </SCButtonGroup>
                </SCCard>
              );
            })}
          </SCCardList>
        ) : (
          <strong>Não há matérias aqui!</strong>
        )}
        <h1>Aguardando aprovação do aluno suporte</h1>
        {pendingSupports.length != 0 ? (
          <SCCardList>
            {pendingSupports.map((support: any) => {
              return (
                <SCCard key={support.id}>
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
                  <SCButtonGroup>
                    <button
                      onClick={() => openModal(support.subject, support.id)}
                    >
                      Reagendar
                    </button>
                    <button onClick={() => cancelSupport(support.id)}>
                      Cancelar
                    </button>
                  </SCButtonGroup>
                </SCCard>
              );
            })}
          </SCCardList>
        ) : (
          <strong>Não há matérias aqui!</strong>
        )}
        <h1>Histórico</h1>
        {finishedSupports.length != 0 || refusedSupports.length != 0 ? (
          <SCCardList>
            {refusedSupports.map((support: any) => {
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
                    <strong>Justificativa:</strong>
                    <h2>{support.justification}</h2>
                  </div>
                  <h2>
                    Status:
                    {support.status == "canceled" && " Cancelada"}
                    {support.status == "finished" && " Concluída"}
                    {support.status == "refused" && " Recusada"}
                  </h2>
                  <SCButtonGroup>
                    {support.status == "refused" && (
                      <button
                        onClick={() => openModal(support.subject, support.id)}
                      >
                        Reagendar
                      </button>
                    )}
                  </SCButtonGroup>
                </SCCard>
              );
            })}
            {finishedSupports.map((support: any) => {
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
      <RequestAgainSupportModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        subject={subject}
        requestId={requestId}
      />
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
    margin-bottom: 10px;
    color: #000;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  > h2 {
    margin-top: 10px;
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
  }

  > div {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    margin-top: 10px;

    > strong {
      color: #292929;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }

    > h2 {
      color: #292929;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
    }

    > div {
      display: flex;
      flex-direction: row;
      gap: 5px;

      > strong {
        color: #292929;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
      }

      > h2 {
        color: #292929;
        font-family: Roboto;
        font-size: 12px;
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
  margin-bottom: 35px;
  gap: 10px;
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
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    background: #27658c;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
`;
