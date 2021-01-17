import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AboutPage from '../../pages/AboutPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import HomePage from '../../pages/HomePage';
import PostPage from '../../pages/PostPage';
import NewPostPage from '../../pages/NewPostPage';
import EditPostPage from '../../pages/EditPostPage';
import Header from '../Header';
import { getAuthToken } from '../../utils';
import { getUser } from '../../redux/reducers/userReducer';

const Root = styled.div`
  padding: 140px 20px;
`;

function App() {
  const token = getAuthToken();
  const dispatch = useDispatch();
  const user = useSelector(store => store.users.user);
  const isLoadingUser = useSelector(store => store.users.isLoadingUser);

  // 有 TOKEN 才 CALL API
  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [token, dispatch]);

  return (
    <Root>
      <Router>
        {!isLoadingUser && <Header />}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/posts/:id">
            <PostPage />
          </Route>
          {user && <Route exact path="/new-post"><NewPostPage /></Route>}
          {user && <Route exact path="/edit-post/:id"><EditPostPage /></Route>}
        </Switch>
      </Router>
    </Root>
  );
}

export default App;
