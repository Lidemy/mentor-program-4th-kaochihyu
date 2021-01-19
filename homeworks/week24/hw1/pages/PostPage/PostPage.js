import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, deletePost } from '../../redux/reducers/postReducer';

const Root = styled.div`
`;

const PostContainer = styled.div`
  max-width: 900px;
  padding: 20px;
  align-items: flex-end;
  word-break: break-all;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PostTitle = styled.div`
  width: 100%;
  font-size: 24px;
  padding: 10px 0;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
`;

const PostDate = styled.div`
  display: block;
  color: rgba(0, 0, 0, 0.3);
`;

const PostContent = styled.div`
  width: 100%;
  margin-top: 20px;
  line-height: 1.5;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => theme.media.sm} {
    justify-content: center;
  }
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
  display: inline-block;
  margin: 10px;
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  background-color: #DC4525;
  color: #fff;
  border: none;
`;

function Post({
  post, user, onDelete, onEdit,
}) {
  if (!post) return null;
  return (
    <PostContainer>
      {user && user.id === post.userId && (
        <Buttons>
          <Button onClick={onEdit}>編輯</Button>
          <DeleteButton onClick={onDelete}>刪除</DeleteButton>
        </Buttons>
      )}
      <TitleArea>
        <div>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
        </div>
      </TitleArea>
      <PostContent>{post.body}</PostContent>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.object).isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
  onDelete: PropTypes.objectOf(PropTypes.func).isRequired,
  onEdit: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default function PostPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(store => store.posts.post);
  const user = useSelector(store => store.users.user);

  const handleDelete = () => {
    dispatch(deletePost(id)).then(() => {
      history.push('/');
    });
  };

  const handleEdit = () => {
    history.push(`/edit-post/${post.id}`);
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]); // dispatch 為甚麼要加入 dependency

  return (
    <Root>
      <Post post={post} user={user} onDelete={handleDelete} onEdit={handleEdit} />
    </Root>
  );
}
