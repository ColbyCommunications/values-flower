import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { breakpoints } from './utils/breakpoints';
import ActiveValue from './ActiveValue';

const StyledActiveValueContainer = styled.div`
  margin: 0 auto 1.5rem;

  @media screen and (min-width: ${breakpoints.lg}) {
    width: 320px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    width: 500px;
    padding-left: 1.5rem;
  }
`;

const ActiveValueContainer = ({
  activePost,
  activeValueProps,
  posts,
  calloutBoxText,
  calloutBoxLink,
}) => (
  <StyledActiveValueContainer>
    <ActiveValue
      calloutBoxLink={calloutBoxLink}
      calloutBoxText={calloutBoxText}
      activePost={activePost === null ? activePost : posts[activePost]}
      {...activeValueProps}
    />
  </StyledActiveValueContainer>
);

ActiveValueContainer.propTypes = {
  activePost: PropTypes.number,
  activeValueProps: PropTypes.objectOf(PropTypes.any).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  calloutBoxText: PropTypes.string.isRequired,
  calloutBoxLink: PropTypes.string.isRequired,
};

ActiveValueContainer.defaultProps = {
  activePost: null,
};

export default ActiveValueContainer;
