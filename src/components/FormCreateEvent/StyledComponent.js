import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputText: {
    width: '100%',
    fontSize: '1.6rem',
    color: '#1A1B1C',
    marginBottom: 25,
    height: '40px',
  },
  selectLabel: {
    fontSize: '1.4rem',
    color: '#5C5C5C',
  },

  select: {
    width: '100%',
    fontSize: '1.6rem',
    color: '#1A1B1C',
    marginBottom: 25,
    height: '40px',
  },

  area: {
    width: '100%',
    marginBottom: 25,
    fontSize: '1.6rem',
    color: '#1A1B1C',
  },

  buttonSubmit: {
    height: '40px',
    width: '80%',
    fontSize: '1.4rem',
  },
}));

const Form = styled.form`
  padding: 40px 10px;
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Text = styled.p`
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
`;

export { Form, useStyles, Text };
