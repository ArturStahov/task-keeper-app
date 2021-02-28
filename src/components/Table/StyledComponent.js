import styled from 'styled-components';

const Table = styled.table`
  text-decoration: none;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  & .row-title {
    background-color: #354251;
  }
  & .td-events {
    position: relative;
    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: #a8c1d5;
      .button-add {
        display: flex;
      }
    }
  }

  & .button-add {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const ButtonAdd = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.activated ? 'none' : 'flex')};
  background-color: transparent;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const ButtonInfo = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.activated ? 'flex' : 'none')};
  background-color: transparent;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Td = styled.td`
  white-space: pre-wrap;
  padding: 10px 0px;
  vertical-align: middle;
  border: 2px solid #3aa0e8;
  position: relative;
  width: 100px;
  font-size: 1.4rem;
  color: #ffffff;
`;

const Th = styled.th`
  white-space: pre-wrap;
  padding: 10px 0px;
  vertical-align: middle;
  border: 2px solid #3aa0e8;
  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 1.4rem;
  color: #ff8500;
  background-color: #354251;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export { Table, Td, Th, Wrapper, ButtonInfo, ButtonAdd };
