import styled from "styled-components";
import { REQUESTS } from "../data/requests";
import { STUDENTS } from "../data/students";
import DownloadFile from "../components/DownloadFile";
import { SUPPORTS } from "../data/supports";
import { useEffect, useState } from "react";

export default function RectoryPage() {
  const filterRequests = REQUESTS.filter((r) => r.status === "pending");

  const [requests, setRequests] = useState<any>([]);

  const hours: any = [];

  const acceptRequest = (request: any) => {
    SUPPORTS.push({
      id: SUPPORTS.length,
      studentId: request.student?.id,
      subjectId: request.subject?.id,
      status: "accepted",
      visible: true,
    });

    REQUESTS.splice(request.id, 1);
    console.log(REQUESTS);
    console.log(request.id);
  };

  const refuseRequest = (request: any) => {
    const updatedRequests = REQUESTS.map((r) => {
      if (r.id === request.id) {
        return { ...r, status: "refuse" };
      }
      return request;
    });

    REQUESTS.length = 0;
    REQUESTS.push(...updatedRequests);
  };

  useEffect(() => {
    const req = filterRequests.map((request) => {
      const student = STUDENTS.find((s) => s.id === request.studentId);

      return {
        ...request,
        student,
      };
    });

    setRequests(req);
  }, [acceptRequest, refuseRequest]);

  return (
    <>
      <SCContainer>
        <strong>Bem-vindo(a)! 👋</strong>

        <div>
          <div>
            <h1>Horas Complementares</h1>
            {hours.length != 0 ? (
              hours.map((request: any) => {
                return (
                  <SCBox key={request.id}>
                    <div>
                      <strong>Aluno: {request.student?.name}</strong>
                      <strong>Curso: {request.course?.name}</strong>
                      <strong>Periodo: {request.period?.name}</strong>
                      <strong>Matéria: {request.subject?.name}</strong>
                      <DownloadFile file={request.file} />
                    </div>

                    <div>
                      <button onClick={() => acceptRequest(request)}>
                        Aceitar
                      </button>
                      <button onClick={() => refuseRequest(request)}>
                        Recusar
                      </button>
                    </div>
                  </SCBox>
                );
              })
            ) : (
              <strong>Não há horas para validar!</strong>
            )}
          </div>
          <div>
            <h1>Solicitações</h1>
            {requests.length != 0 ? (
              requests.map((request: any) => {
                return (
                  <SCBox>
                    <div>
                      <strong>Aluno: {request.student?.name}</strong>
                      <strong>Curso: {request.course?.name}</strong>
                      <strong>Periodo: {request.period?.name}</strong>
                      <strong>Matéria: {request.subject?.name}</strong>
                      <DownloadFile file={request.file} />
                    </div>

                    <div>
                      <button onClick={() => acceptRequest(request)}>
                        Aceitar
                      </button>
                      <button onClick={() => refuseRequest(request)}>
                        Recusar
                      </button>
                    </div>
                  </SCBox>
                );
              })
            ) : (
              <strong>Não há nenhuma solicitação!</strong>
            )}
          </div>
        </div>
      </SCContainer>
    </>
  );
}

const SCContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 40px;
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

  > div {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    gap: 30px;

    > div {
      box-sizing: border-box;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 15px;
      border-top: 1px solid #b5bcc7;
      height: auto;

      > strong {
        color: #292929;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        margin-top: 35px;
      }

      > h1 {
        color: #292929;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        margin-bottom: 5px;
      }
    }
  }
`;

const SCBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  background: #f8f6f8;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

  > div {
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: center;

    > strong {
      color: #292929;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
    }

    > button {
      width: 100px;
      height: 40px;
      border-radius: 4px;
      background: #27658c;
      border: none;
      color: #fff;

      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
