import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import snowflakeTexture from '../../assets/Snowflake-Texture.png';
import heroTexture from '../../assets/COLBY_HERO_texture.png';

const StyledCalloutBox = styled.a`
  position: relative;
  display: block;
  max-width: 400px;
  padding: 1.5rem 0.75rem 2.25rem;
  margin-top: 2.25rem;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Argent', serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  color: white;
  text-align: center;
  transition: transform 0.2s;
  transform: scale(0.944);

  @supports (pointer-events: none) {
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      content: '';
      background-color: #214280;
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
      content: '';
      background-image: url(${snowflakeTexture});
      background-position: center;
      background-size: 800px;
      opacity: 0.6;
    }
  }

  &::before {
    background: #214280;
  }

  &:hover {
    color: white;
    text-decoration: none;
    transform: scale(1);
  }

  span {
    position: relative;
    color: white;

    &::after {
      position: absolute;
      right: -9rem;
      bottom: -4.75rem;
      left: -4rem;
      height: 3rem;
      content: '';
      background-image: url(${heroTexture});
      background-size: cover;
    }
  }
`;

const CalloutBox = ({ calloutBoxText, calloutBoxLink }) => (
  <StyledCalloutBox href={calloutBoxLink}>
    <span dangerouslySetInnerHTML={{ __html: calloutBoxText }} />
  </StyledCalloutBox>
);

CalloutBox.propTypes = {
  calloutBoxLink: PropTypes.string.isRequired,
  calloutBoxText: PropTypes.string.isRequired,
};

export default CalloutBox;
