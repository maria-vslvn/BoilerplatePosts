/**
 *
 * Post
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Post({ posts, postsFetchRequest }) {
  return (
    <div
      style={{
        width: 'calc(100% - 420px)',
        marginLeft: 'auto',
        border: '1px solid red',
      }}
    >
      {posts &&
        posts.posts.map(post => (
          <div style={{ border: '1px solid red' }}>
            <FormattedMessage {...messages.header} />
            <div className="post__head">
              <p>{post.title}</p>
            </div>
            <div className="post__body">
              <p>{post.content}</p>
            </div>
            <div className="post__footer">
              <p>{post.createdBy}</p>
              <p>{posts.createdAt}</p>
              <p />
              <p>{post.channels}</p>
            </div>
          </div>
        ))}
      <button onClick={postsFetchRequest}>Load</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  createdBy: PropTypes.string,
  updatedAt: PropTypes.string,
  channels: PropTypes.string,
};
Post.defaultProps = {
  title: 'Default title',
  content: 'Default content',
  createdAt: 'Default author',
  createdBy: 'Default post date',
  updatedAt: 'Default edit date',
  channels: 'Default hashtags',
};

export default memo(Post);
