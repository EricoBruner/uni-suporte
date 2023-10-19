import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import SelectRatingStars from "../RatingStars/SelectRatingStars";

export default function RefuseSupportModal({ isOpen, closeModal }: any) {
  const [message, setMessage] = useState("");
  const [question1, setQuestion1] = useState<boolean>();
  const [question2, setQuestion2] = useState<boolean>();
  const [question3, setQuestion3] = useState<boolean>();

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleQuestionChange = (question: any, value: boolean) => {
    switch (question) {
      case 1:
        setQuestion1(value);
        break;
      case 2:
        setQuestion2(value);
        break;
      case 3:
        setQuestion3(value);
        break;
      default:
        break;
    }
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <SCContentForm onSubmit={closeModal}>
        <h1>Feedback</h1>
        <h2>Necessário dar um feedback de sua aula para continuar!</h2>

        <label>
          <h1>Começou no horário combinado?</h1>
          <input
            type="checkbox"
            checked={question1 === true}
            onChange={() =>
              handleQuestionChange(1, question1 === true ? false : true)
            }
            required={question1 === undefined}
          />
          <strong>sim</strong>
          <input
            type="checkbox"
            checked={question1 === false}
            onChange={() =>
              handleQuestionChange(1, question1 === false ? true : false)
            }
            required={question1 === undefined}
          />
          <strong>não</strong>
        </label>

        <label>
          <h1>Terminou no horário combinado?</h1>
          <input
            type="checkbox"
            checked={question2 === true}
            onChange={() =>
              handleQuestionChange(2, question2 === true ? false : true)
            }
            required={question2 === undefined}
          />
          <strong>sim</strong>
          <input
            type="checkbox"
            checked={question2 === false}
            onChange={() =>
              handleQuestionChange(2, question2 === false ? true : false)
            }
            required={question2 === undefined}
          />
          <strong>não</strong>
        </label>

        <label>
          <h1>O tema da aula foi o combinado?</h1>
          <input
            type="checkbox"
            checked={question3 === true}
            onChange={() =>
              handleQuestionChange(3, question3 === true ? false : true)
            }
            required={question3 === undefined}
          />
          <strong>sim</strong>
          <input
            type="checkbox"
            checked={question3 === false}
            onChange={() =>
              handleQuestionChange(3, question3 === false ? true : false)
            }
            required={question3 === undefined}
          />
          <strong>não</strong>
        </label>
        <div>
          <strong>Avaliação:</strong>
          <SelectRatingStars maxRating={5} />
        </div>
        <strong>Comentário:</strong>
        <textarea
          id="mensagem"
          name="mensagem"
          value={message}
          onChange={handleMessageChange}
          required={question1 === undefined}
        />
        <SCButtonGroup>
          <SCSendButton type="submit">Enviar</SCSendButton>
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

  > div {
    display: flex;
    align-items: baseline;
    gap: 5px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;

    > strong {
      color: #292929;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: 10px;
    }
  }

  > h1 {
    color: #417799;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 20px;
  }

  > h2 {
    width: 100%;
    text-align: left;
    color: #ee4950;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  > textarea {
    margin-top: 10px;
    width: 400px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  > strong {
    width: 100%;
    text-align: left;
    color: #292929;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
  }

  > label {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    align-items: center;

    > h1 {
      color: #000;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      margin-right: 5px;
    }

    > input {
      margin-right: 3px;
    }

    > strong {
      color: #000;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      margin-right: 5px;
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
