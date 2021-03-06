import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CalloutBox from './CalloutBox';
import ActiveValueHeading from './ActiveValueHeading';
import { breakpoints } from './utils/breakpoints';

const StyledActiveValue = styled.article`
  div {
    @media screen and (min-width: ${breakpoints.xl}) {
      max-width: 30rem;
      padding-left: 3.75rem;
    }
  }
`;

const ActiveValue = ({
  title,
  excerpt,
  activePost,
  calloutBoxLink,
  calloutBoxText,
}) => (
  <StyledActiveValue>
    <ActiveValueHeading activePost={activePost}>
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </ActiveValueHeading>
    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    <CalloutBox
      calloutBoxText={calloutBoxText}
      calloutBoxLink={calloutBoxLink}
    />
  </StyledActiveValue>
);

ActiveValue.propTypes = {
  activePost: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  calloutBoxLink: PropTypes.string.isRequired,
  calloutBoxText: PropTypes.string.isRequired,
};

ActiveValue.defaultProps = {
  activePost: null,
};

export default ActiveValue;
