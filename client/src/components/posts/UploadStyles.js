import styled from 'styled-components';
import { Button } from '../../GlobalStyle';

export const FormLayout = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 479px) {
    height: 90vh;
  }
`;

export const FormContainer = styled.div`
  color: black;
  border: 1px solid #1d3561;
  width: 400px;
  height: 500px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 479px) {
    width: 300px;
    height: 600px;
  }
`;

export const FormPrevImgBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    border-radius: 10px;
    width: 0%;
    opacity: 0;
    &.show {
      opacity: 1;
      width: 50%;
      transition: 0.5s;
    }
  }
  @media screen and (max-width: 479px) {
  }
`;

export const FormLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 479px) {
    width: 50%;
  }
`;

export const FormTitle = styled.h1`
  margin-top: 5%;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

export const FormDropperBox = styled.div`
  border: 1px solid #000000;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  :hover {
    background-color: #bebebe;
    transition: 0.5s;
    color: #fff;
  }
  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
`;

export const FormLabelText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1d3561;
`;

export const FormInput = styled.input`
  margin-top: 3px;
  width: 250px;
  height: 23px;
  border: 1px solid #1d3561;
`;

export const FormSubmitBtn = styled(Button)`
  /*
  역할: 회원가입 폼 제출버튼 
  스타일링: GlobalStyle의 Button 확장으로 받아와 스타일을 덮어씌웁니다.
  */
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  font-size: 13px;
  color: #fff;
`;
