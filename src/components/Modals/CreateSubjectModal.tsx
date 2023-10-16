import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { MYSUPPORTS } from "../../data/mySupports";

export default function CreateSubjectModal({
  isOpen,
  closeModal,
  studentId,
  subject,
}: any) {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  const [selectedTime, setSelectedTime] = useState("");
  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  const [message, setMessage] = useState("");
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const sendData = (event: any) => {
    event.preventDefault();

    const support = {
      id: MYSUPPORTS.length,
      studentId: 1,
      studentSuportId: studentId,
      subjectId: subject.id,
      date: selectedDate,
      time: selectedTime,
      status: "pending",
      justification: null,
      intention: message,
    };

    MYSUPPORTS.push(support);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <SCContentForm onSubmit={sendData}>
        <h1>{subject?.name}</h1>
        <SCInputGroup>
          <input
            type="date"
            id="data"
            name="data"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
          <input
            type="time"
            id="hora"
            name="hora"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </SCInputGroup>
        <strong>Escreva qual seu proposito com o suporte</strong>
        <textarea
          id="mensagem"
          name="mensagem"
          value={message}
          onChange={handleMessageChange}
        />
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
    backgroundColor: 0,
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

  > textarea {
    margin-top: 10px;
    width: 100%;
    height: 80px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
    padding: 10px;
    box-sizing: border-box;
  }

  > strong {
    width: 100%;
    text-align: left;
    margin-top: 20px;
    color: #292929;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;

const SCInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;

  > input {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 10px;
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
