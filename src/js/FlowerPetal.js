import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flush } from './utils/flush';
import BasicPetal from './BasicPetal';
import PetalWithImage from './PetalWithImage';
import { circles } from './utils/circles';

const gridDimensions = [
  [8, 9],
  [5, 6],
  [5, 12],
  [10, 3],
  [10, 15],
  [15, 6],
  [15, 12],
];

const inFocusTranslates = [
  '0, 0',
  '-3rem, -3rem',
  '3rem, -3rem',
  '-3rem, 0',
  '3rem, 0',
  '-3rem, 3rem',
  '3rem, 3rem',
];

const inFocusStyles = ({ index }) => `transform: translate3d(${
  inFocusTranslates[index]
}, 0);

&:hover {
  transform: scale(1.06) translate3d(${inFocusTranslates[index]}, 0);
}`;

const inFocusAndActiveStyles = ({ index }) => `transform: translate3d(${
  inFocusTranslates[index]
}, 0) scale(1.2);
z-index: 12;
  
&:hover {
  transform: translate3d(${inFocusTranslates[index]}, 0) scale(1.2);
}
`;

const individualizedStyles = ({ inFocus, index, active }) => `
    ${index === 0 ? 'z-index: 11;' : ''}
    grid-row: ${gridDimensions[index][0]};
    grid-column: ${gridDimensions[index][1]};

    ${inFocus ? inFocusStyles({ index }) : ''}
    ${inFocus && active ? inFocusAndActiveStyles({ index }) : ''}
`;

const Petal = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin-top: -3.75rem;
  overflow: visible;
  cursor: pointer;
  transition: transform 0.4s;
  animation-delay: .${props => `${props.index}`}s;

  &:nth-of-type(odd) {
    margin-left: auto;
  }

  &:nth-of-type(even) {
    margin-right: auto;
  }

  &:hover {
    transform: scale(1.06);
  }

  &:first-of-type {
    margin-top: 0;
  }

  &:focus {
    outline: none;
  }

  &.active {
    z-index: 19;
  }

  &::after {
    ${flush};
    width: 180px;
    height: 180px;
    content: '';
    background-image: url(${props => circles[props.index]});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.92;
  }

  ${individualizedStyles};
`;

const FlowerPetal = ({
  setActivePost,
  className,
  index,
  title,
  active,
  thumbnail,
  inFocus,
}) => (
  <Petal
    role="button"
    index={index}
    tabIndex={0}
    inFocus={inFocus}
    active={active}
    onClick={() => setActivePost(active ? null : index)}
  >
    {active ? (
      <PetalWithImage>
        <img
          alt={title}
          src={thumbnail[0]}
          width={thumbnail[1]}
          height={thumbnail[2]}
        />
      </PetalWithImage>
    ) : (
      <BasicPetal dangerouslySetInnerHTML={{ __html: title }} />
    )}
  </Petal>
);

FlowerPetal.propTypes = {
  setActivePost: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  thumbnail: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FlowerPetal;
