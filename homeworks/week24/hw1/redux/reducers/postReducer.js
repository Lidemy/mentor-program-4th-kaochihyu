import { createSlice } from '@reduxjs/toolkit';
import {
  getPostAPI,
  getPostsAPI,
  postNew,
  removePost,
  editPostAPI,
} from '../../WebAPI';

const postReducer = createSlice({
  name: 'posts',
  initialState: {
    isLoadingPost: false,
    post: null,
    posts: [],
    newPostResponse: null,
    deleteResponse: null,
  },
  reducers: {
    setIsLoadingPost: (state, action) => {
      state.isLoadingPost = action.payload;
    },

    setPost: (state, action) => {
      state.post = action.payload;
    },

    setPosts: (state, action) => {
      state.posts = action.payload;
    },

    setNewPostResponse: (state, action) => {
      state.newPostResponse = action.payload;
    },

    setDeleteResponse: (state, action) => {
      state.deleteResponse = action.payload;
    },
  },
});

export const {
  setIsLoadingPost,
  setPost,
  setPosts,
  setNewPostResponse,
  setIsLoadingNewPost,
  setDeleteResponse,
} = postReducer.actions;

export const getPost = id => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  getPostAPI(id)
    .then((res) => {
      dispatch(setPost(res));
      dispatch(setIsLoadingPost(false));
    })
    .catch((err) => {
      console.log(err);
    });
};

// 這樣寫就是 redux-thunk ? 那 createAsyncThunk 甚麼時候用  ?
export const getPosts = page => dispatch => getPostsAPI(page)
  .then((res) => {
    dispatch(setPosts(res));
  })
  .catch((err) => {
    console.log(err);
  });

// 呼叫 api, 把結果設到 newPostResponse
// 回傳一個 promise，就可以在 handleSubmit dispatch 之後用 .then()
export const newPost = (title, body) => dispatch => postNew(title, body)
  .then((res) => {
    dispatch(setNewPostResponse(res));
    return res;
  });

export const deletePost = id => dispatch => removePost(id)
  .then(res => dispatch(setDeleteResponse(res)));

export const editPost = (id, title, body) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  return editPostAPI(id, title, body).then((res) => {
    dispatch(setPost(res));
    dispatch(setIsLoadingPost(false));
    return res;
  });
};

export default postReducer;
