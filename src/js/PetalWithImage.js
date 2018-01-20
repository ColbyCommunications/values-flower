import styled from 'styled-components';

export default styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  transform: scale(0.97) translate3d(0.25rem, 0.25rem, 0);

  img {
    width: 100%;
    height: auto;
    clip-path: url('#oblong-circle-path');
  }
`;
