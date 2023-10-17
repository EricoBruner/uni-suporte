import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Selector from "./Selector";
import { COURSE } from "../../data/course";
import { PERIOD } from "../../data/period";
import { SUBJECTS } from "../../data/subjects";
import { REQUESTS } from "../../data/requests";

export default function CreateSubjectModal({
  isOpen,
  closeModal,
  studentId,
}: any) {
  const [courseItem, setCourseItem] = useState<any>(null);
  const [periodItem, setPeriodItem] = useState<any>(null);
  const [subjectItem, setSubjectItem] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const sendRequest = (e: any) => {
    e.preventDefault();

    REQUESTS.push({
      id: REQUESTS.length,
      studentId: studentId,
      course: courseItem,
      period: periodItem,
      subject: subjectItem,
      status: "pending",
      file: selectedFile,
    });

    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <SCContentForm onSubmit={sendRequest}>
        <h1>Adicionar Matéria</h1>

        <SCSelectorGroup>
          <Selector
            data={COURSE}
            setItem={setCourseItem}
            placeholder={"Curso"}
          />
          <Selector
            data={PERIOD}
            setItem={setPeriodItem}
            placeholder={"Periodo"}
          />
          <Selector
            data={SUBJECTS}
            setItem={setSubjectItem}
            placeholder={"Disciplina"}
          />

          <div>
            <strong>Enviar boletim acadêmico do semestre selecionado</strong>
            <input type="file" onChange={handleFileChange} required />
          </div>
        </SCSelectorGroup>

        <p>
          <strong>Aviso:</strong> A nota da matéria selecionada precisa ser{" "}
          <strong>8</strong> ou <strong>superior</strong> para estar apto a dar
          suporte.
        </p>

        <SCButtonGroup>
          <SCSendButton type="submit">Enviar solicitação</SCSendButton>
          <SCCancelButton onClick={closeModal}>Cancelar</SCCancelButton>
        </SCButtonGroup>
      </SCContentForm>
    </Modal>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: 0,
    borderRadius: 0,
    backgroundColor: "none",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
};

const SCContentForm = styled.form`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;

  > h1 {
    color: #417799;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 30px;
  }

  > p {
    width: 500px;
    text-align: left;
    margin-top: 30px;
    color: #292929;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    > strong {
      color: #ff3740;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

const SCSelectorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;

  > div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    > strong {
      color: #292929;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 0;
    }
  }
`;

const SCButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 24px;
  margin-top: 40px;
`;

const SCSendButton = styled.button`
  width: 100%;
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
`;

const SCCancelButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #27658c;
  background: none;
  color: #27658c;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
