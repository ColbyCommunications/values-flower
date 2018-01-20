import React from 'react';
import styled from 'styled-components';

import { breakpoints } from './utils/breakpoints';
import grayAccent from '../../assets/Accent-9_GRAY.png';
import ActiveValueContainer from './ActiveValueContainer';

const headingStyles = `
    position: relative;
    z-index: 10;
    margin-bottom: 3.5rem;
    color: #214280;
    font-size: 2.5rem;
    line-height: 1;

    @media screen and (min-width: ${breakpoints.lg}) {
      max-width: 450px;
      font-size: 3.5rem;
    }

    a,
    span {
      position: relative;
      z-index: 11;
    }

    &:after {
      position: absolute;
      right: -13rem;
      bottom: -2.25rem;
      left: -1.5rem;
      z-index: -1;
      height: 5rem;
      background-image: url(${grayAccent});
      background-size: 450px;
      background-repeat: no-repeat;
      content: '';
    }
  }
`;

const StyledH1 = styled.h1`
  ${headingStyles};
`;

const StyledH2 = styled.h2`
  ${headingStyles};
`;

const ActiveValueHeading = ({ activePost, children }) =>
  activePost === null ? (
    <StyledH1 children={children} />
  ) : (
    <StyledH2 children={children} />
  );

export default ActiveValueHeading;
