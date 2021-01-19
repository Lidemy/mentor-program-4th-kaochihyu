import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/reducers/postReducer';

const Root = styled.div`
  margin: 0px;
  box-sizing: border-box;
`;

const PostList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 auto;
`;

const PostContainer = styled.div`
  flex: 1 1 auto;
  min-width: 300px;
  align-items: flex-end;
  margin: 20px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
  }
`;

const PostTitle = styled(Link)`
  font-size: 20px;
  padding: 10px 0;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
`;

const PostDate = styled.div`
  display: block;
  color: rgba(0, 0, 0, 0.3);
`;

const Banner = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 50px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin-bottom: 40px;
`;

const BannerTitle = styled.div`
  width: 100%;
  color: color: rgba(0, 0, 0, 0.8);
  font-size: 72px;
  letter-spacing: -1px;
  line-height: 0.8;
`;

const BannerContent = styled.div`
  color: color: rgba(0, 0, 0, 0.8);
  margin-top: 40px;
  font-size: 20px;
  max-width: 600px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const PageButton = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  width: 36px;
  height: 36px;
  border: solid 1px #3333332b;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${props => props.prev
    && `
      border-radius: 0px;
      border: none;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: #333;
        border-bottom: 1px solid #333;
      }
    `}
`;

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default function HomePage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts.posts);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page, dispatch]);

  return (
    <Root>
      <Banner>
        <BannerTitle>
          Without any
          <br />
          perspectives
        </BannerTitle>
        <BannerContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BannerContent>
      </Banner>
      <PostList>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </PostList>
      <Pagination>
        {page !== 1 && (
          <PageButton prev onClick={handlePrevClick}>
            Prev
          </PageButton>
        )}
        <PageButton>{page}</PageButton>
        {posts.length === 6 && (
          <PageButton prev onClick={handleNextClick}>
            Next
          </PageButton>
        )}
      </Pagination>
    </Root>
  );
}
