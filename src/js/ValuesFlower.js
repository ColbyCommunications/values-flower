import React from 'react';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';

import FlowerPetal from './FlowerPetal';
import { breakpoints } from './utils/breakpoints';
import { flush } from './utils/flush';
import snowflakeTexture from '../../assets/Snowflake-Texture.png';

const ValuesFlower = styled.div`
  position: relative;
  width: 300px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 600px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    order: -1;
    width: 320px;

    @supports (display: grid) {
      width: 500px;
    }
  }

  @supports (pointer-events: none) {
    &::before {
      ${flush};
      z-index: 11;
      pointer-events: none;
      content: '';
      background-image: url(${snowflakeTexture});
      background-size: 848px;
      opacity: 0.8;
    }
  }

  @supports (display: grid) {
    @media screen and (min-width: ${breakpoints.md}) {
      display: grid;
      transition: transform 0.2s;
      transform: scale(1.122);
      grid-template-columns: repeat(24, 25px);
      grid-template-rows: repeat(24, 25px);
      ${({ inFocus }) => (inFocus ? `transform: scale(1);` : '')};
    }
  }
`;

class StyledValuesFlower extends React.Component {
  handleClickOutside() {
    this.props.setActivePost(null);
  }

  render = ({ posts, activePost, setActivePost } = this.props) => (
    <ValuesFlower inFocus={activePost !== null}>
      {posts.map(({ id, title, thumbnail }, i) => (
        <FlowerPetal
          key={id}
          inFocus={activePost !== null}
          title={title.rendered}
          setActivePost={setActivePost}
          thumbnail={thumbnail}
          index={i}
          active={activePost === i}
          className={`petal-${i}`}
        />
      ))}
    </ValuesFlower>
  );
}

export default enhanceWithClickOutside(StyledValuesFlower);
