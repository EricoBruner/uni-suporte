import styled from "styled-components";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <SCContainer>
      <div>
        <SCBoxLogo>
          <img src={logoImage} alt="logo" />
          <strong>UniSuporte</strong>
        </SCBoxLogo>

        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/supports/me"}>Meus suportes</Link>
          <Link to={"/student-support/me"}>Aluno suporte</Link>
          <Link to={"/"}>Top 10</Link>
          <Link to={"/reitoria"}>Secreto</Link>
        </nav>
      </div>
      <div>
        <SCVerticalLine />
        <SCPerfil />
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
      color: #616e84;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
    }
  }
`;

const SCVerticalLine = styled.div`
  border-left: 2px solid #b5bcc7;
  height: 60px;
  margin-right: 70px;
`;

const SCPerfil = styled.div`
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
