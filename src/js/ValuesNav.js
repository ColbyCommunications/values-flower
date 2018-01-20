import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ValuesNavButton from './ValuesNavButton';
import { breakpoints } from './utils/breakpoints';

const StyledValuesNav = styled.div`
  display: none;
  align-items: flex-start;
  width: 100%;
  max-width: none;
  margin-top: 4.5rem;

  @media screen and (min-width: ${breakpoints.lg}) {
    display: flex;
  }
`;

const ValuesNav = ({ posts, activePost, setActivePost }) => (
  <StyledValuesNav>
    {posts.map((post, index) => (
      <ValuesNavButton
        setActivePost={setActivePost}
        key={post.id}
        index={index}
        activePost={activePost}
        post={post}
      />
    ))}
  </StyledValuesNav>
);

ValuesNav.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
  activePost: PropTypes.number,
  setActivePost: PropTypes.func.isRequired,
};

ValuesNav.defaultProps = {
  activePost: null,
};

export default ValuesNav;
