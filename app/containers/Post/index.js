/**
 *
 * PostsPage
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import reducer from './reducer';
import saga from './saga';
import { postsFetchRequest } from './actions';
import Post from '../../components/Post';

export function PostsPage({post, postsFetchRequest}) {
  useInjectReducer({ key: 'postsPage', reducer });
  useInjectSaga({ key: 'postsPage', saga });

  return (
    <div>
      {/*<Post post={post} postsFetchRequest={postsFetchRequest}/>*/}
      <button style={{marginLeft:450}} onClick={postsFetchRequest}>Load posts</button>
    </div>
  );
}

const mapStateToProps = ({ postsPageReducer }) => ({
  posts: postsPageReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    postsFetchRequest: () => dispatch(postsFetchRequest()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const PostContainer = compose(
  withConnect,
  memo,
)(PostsPage);

export default PostContainer;
