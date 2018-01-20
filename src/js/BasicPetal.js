import styled from 'styled-components';

import { flush } from './utils/flush';

export default styled.div`
  ${flush};
  z-index: 14;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  color: white;
  text-align: center;
`;
