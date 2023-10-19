import styled from "styled-components";
import logoImage from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { STUDENTS } from "../../data/students";

export default function Header() {
  const location = useLocation();
  const imageUrl = STUDENTS.find((s) => s.name === "Evelyn Maria")?.image;

  return (
    <SCContainer>
      <div>
        <SCBoxLogo>
          <img src={logoImage} alt="logo" />
          <strong>UniSuporte</strong>
        </SCBoxLogo>

        <nav>
          <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to={"/supports/me"}
            className={location.pathname === "/supports/me" ? "active" : ""}
          >
            Meus suportes
          </Link>
          <Link
            to={"/student-support/me"}
            className={
              location.pathname === "/student-support/me" ? "active" : ""
            }
          >
            Aluno suporte
          </Link>
          <Link
            to={"/ranking"}
            className={location.pathname === "/ranking" ? "active" : ""}
          >
            Top 10
          </Link>
          <Link
            to={"/reitoria"}
            className={location.pathname === "/reitoria" ? "active" : ""}
          >
            Demo Universidade
          </Link>
          <Link
            to={"/alert"}
            className={location.pathname === "/alert" ? "active" : ""}
          >
            Demo Feedback
          </Link>
        </nav>
      </div>
      <div>
        <SCVerticalLine />
        <SCPerfil src={imageUrl} />
        <IoIosArrowDown />
      </div>
    </SCContainer>
  );
}

const SCContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  background: #f8f6f8;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

  > div {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 40px;
  }

  > div > nav {
    margin-left: 70px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    a {
      display: flex;
      align-items: center;
      height: 100%;
      color: #616e84;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      box-sizing: border-box;

      &.active {
        border-bottom: 4px solid #0078d4;
        color: #417799;
      }
    }
  }
`;

const SCVerticalLine = styled.div`
  border-left: 2px solid #b5bcc7;
  height: 60px;
  margin-right: 70px;
`;

const SCPerfil = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
`;

const SCBoxLogo = styled.div`
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;

  strong {
    color: #000;
    font-family: Roboto;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
  }
`;
