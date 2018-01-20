import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ValuesNav from './ValuesNav';
import ActiveValueContainer from './ActiveValueContainer';
import ValuesFlower from './ValuesFlower';

const StyledValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

class Values extends React.Component {
  setActivePost = this.setActivePost.bind(this);

  static propTypes = {
    endpoint: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.object),
    defaultText: PropTypes.string,
    defaultTitle: PropTypes.string,
    calloutBoxLink: PropTypes.string,
    calloutBoxText: PropTypes.string,
  };

  static defaultProps = {
    posts: [],
    endpoint: '',
  };

  static getActiveValueProps = ({
    activePost,
    posts,
    defaultText,
    defaultTitle,
  }) =>
    activePost !== null
      ? {
        title: posts[activePost].title.rendered,
        excerpt: posts[activePost].excerpt.rendered,
      }
      : {
        title: defaultTitle,
        excerpt: defaultText,
      };

  constructor(props) {
    super(props);

    this.state = {
      posts: props.posts,
      activePost: null,
      inFocus: false,
    };
  }

  componentWillMount() {
    if (this.props.endpoint && this.state.posts.length === 0) {
      this.fetchPosts();
    }
  }

  setActivePost(activePost) {
    this.setState({ activePost });
  }

  async fetchPosts() {
    const response = await fetch(this.props.endpoint);
    const posts = await response.json();

    this.setState({ posts });
  }

  render = (
    { posts, activePost } = this.state,
    { defaultText, defaultTitle, calloutBoxLink, calloutBoxText } = this.props
  ) => (
    <StyledValues>
      <ActiveValueContainer
        activePost={activePost}
        posts={posts}
        calloutBoxLink={calloutBoxLink}
        calloutBoxText={calloutBoxText}
        activeValueProps={Values.getActiveValueProps({
          activePost,
          posts,
          defaultText,
          defaultTitle,
        })}
      />
      <ValuesFlower
        activePost={activePost}
        posts={posts}
        setActivePost={this.setActivePost}
      />
      <ValuesNav
        posts={posts}
        activePost={activePost}
        setActivePost={this.setActivePost}
      />
    </StyledValues>
  );
}

export default Values;
