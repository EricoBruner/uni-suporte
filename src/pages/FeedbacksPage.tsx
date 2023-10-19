import styled from "styled-components";
import Header from "../components/Header";
import { FEEDBACKS } from "../data/feedbacks";
import { STUDENTS } from "../data/students";
import RatingStars from "../components/RatingStars";

export default function FeedbacksPage() {
  const filterFeedbacks = FEEDBACKS.filter((f) => f.studentSuportId === 1);

  const feedbacks = filterFeedbacks.map((f) => {
    const studentSuport = STUDENTS.find(
      (student) => student.id === f.studentSuportId
    );
    const student = STUDENTS.find((subject) => subject.id === f.studentId);

    return {
      ...f,
      studentSuport,
      student,
    };
  });

  return (
    <>
      <Header />
      <SCContainer>
        <strong>Seus feedbacks!</strong>

        {feedbacks.length != 0 ? (
          <SCBoxList>
            {feedbacks.map((feedback) => {
              return (
                <SCBox>
                  <div>
                    <img src={feedback.student?.image} alt="perfil image" />
                    <div>
                      <strong>{feedback.student?.name}</strong>
                      <RatingStars rating={feedback.rating} />
                    </div>
                  </div>
                  <SCComment>{feedback.comment}</SCComment>
                </SCBox>
              );
            })}
          </SCBoxList>
        ) : (
          <p>Você não possui feedbacks!</p>
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
  box-sizing: border-box;

  > p {
    margin-top: 30px;
    color: #292929;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 35px;
  }

  > strong {
    color: #292929;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
`;

const SCBoxList = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

const SCBox = styled.div`
  width: 200px;
  height: auto;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 40px;

      > strong {
        text-align: left;
        margin-left: 5px;
        color: #292929;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
      }
    }
  }
`;

const SCComment = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 5px;
  color: #292929;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
`;
