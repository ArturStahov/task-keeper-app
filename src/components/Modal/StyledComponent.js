import styled from 'styled-components';

const Modal = styled.div`
  padding: 20px;
  width: 30%;
  height: 50%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  box-shadow: 5px 5px 15px 5px rgba(2, 2, 1, 0.6);
  border-bottom-right-radius: 10px;
  transform: scale(0);
  transform: translateX(-600px);
  opacity: 0;
`;

const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  border: 2px solid #000000;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 4px rgba(2, 2, 1, 0.22);
  background-color: #ffffff;
  cursor: pointer;
`;
export { Modal, ButtonClose };
