import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken } from '../../utils';
import { getPost, editPost } from '../../redux/reducers/postReducer';

const Root = styled.div`
  padding: 20px 70px;
`;

const PostContainer = styled.form`
  width: 70%;
  height: 80px;
`;

const PostTitle = styled.div`
  font-size: 18px;
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  & input {
    width: 60%;
    height: 30px;
  }
`;

const PostContent = styled.div`
  margin-top: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 260px;
  margin-top: 10px;
`;

const Button = styled.button`
  font-size: 14px;
  color: #333;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 20px;
  text-shadow: none;
  border-style: none;
  border: 1px solid #333;
  display: block;
  float: right;
`;

const ErrorMessage = styled.div`
  color: red;
`;

export default function EditPostPage() {
  const token = getAuthToken();
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(store => store.posts.post);
  const [errorMessage, setErrorMessage] = useState();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  if (!token) {
    history.push('/');
  }

  const handleSave = () => {
    if (!title || !body) {
      setErrorMessage('Please fill the empty area.');
    } else {
      dispatch(editPost(id, title, body)).then(() => {
        history.push(`/posts/${id}`);
      });
    }
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  return (
    <Root>
      <PostContainer>
        <PostTitle>
          Title：
          <input
            value={title}
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
        </PostTitle>
        <PostContent>Post：</PostContent>
        <Textarea onChange={e => setBody(e.target.value)}>{body}</Textarea>
        <Button onClick={handleSave}>Save</Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </PostContainer>
    </Root>
  );
}
