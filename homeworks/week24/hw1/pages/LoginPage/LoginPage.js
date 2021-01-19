import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/userReducer';

const Form = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  height: 400px;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 20px 0;
`;

const Username = styled.div`
  margin-bottom: 20px;
`;
const Password = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  font-size: 18px;
  margin-top: 40px;
  padding: 10px 20px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: rgba(225, 0, 0, 0.5);
  font-weight: 600;
`;

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const errorMessage = useSelector(store => store.users.errorMessage);

  const handleSubmit = () => {
    dispatch(login(username, password)).then((res) => {
      if (res) {
        history.push('/');
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Welcome Back</Title>
      <Username>
        Username
        {' '}
        <input value={username} onChange={e => setUsername(e.target.value)} />
      </Username>
      <Password>
        Password
        {' '}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Password>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button>Login</Button>
    </Form>
  );
}
