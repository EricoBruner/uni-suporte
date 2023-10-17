import styled from "styled-components";
import { REQUESTS } from "../data/requests";
import { STUDENTS } from "../data/students";
import DownloadFile from "../components/DownloadFile";
import { useEffect, useState } from "react";

export default function RectoryPage() {
  const [requests, setRequests] = useState<any>([]);

  useEffect(() => {
    const updateRequests = () => {
      const updatedRequests = REQUESTS.filter((request) => {
        const student = STUDENTS.find((s) => s.id === request.studentId);

        return {
          ...request,
          student,
        };
      });

      setRequests(updatedRequests);
      console.log("att");
      console.log(requests);
    };

    const interval = setInterval(updateRequests, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SCContainer>
        <strong>Bem-vindo(a)! 👋</strong>

        <div>
          <div>
            <h1>Horas Complementares</h1>
          </div>
          <div>
            <h1>Solicitações</h1>
            {requests.map((request: any) => {
              return (
                <SCBox>
                  <strong>Aluno: {request.student?.name}</strong>
                  <strong>Curso: {request.course?.name}</strong>
                  <strong>Periodo: {request.period?.name}</strong>
                  <strong>Matéria: {request.subject?.name}</strong>
                  <DownloadFile file={request.file} />
                </SCBox>
              );
            })}
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
      border: 1px solid #b5bcc7;
      min-height: 400px;

      > h1 {
        color: #292929;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
      }
    }
  }
`;

const SCBox = styled.div``;
