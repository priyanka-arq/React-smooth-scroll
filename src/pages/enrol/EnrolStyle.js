import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #5c5cb5;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Logo = styled.div`
  margin-left: 32px;
  margin-top: 32px;
  color: #fff;
`;

export const Icon = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.div`
  background: #010101;
  width: 800px;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
    width: 400px;
  }

  @media screen and (max-width: 780px) {
    padding: 32px 32px;
    width: 400px;
  }
`;

export const FormH1 = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.div`
  color: #fff;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormInput = styled.div`
  padding: 20px 20px;
  margin-bottom: 32px;
  background: #fff;
  border-radius: 4px;
`;

export const FormButton = styled.div`
  background: #5c5cb5;
  text-align: center;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
