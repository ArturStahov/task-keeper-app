import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: flex-start;
`;

const UserName = styled.span`
  font-size: 1.6rem;
  color: #000000;
  margin-right: 15px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin-right: 15px;
`;

export { UserName, Avatar, Wrapper };
