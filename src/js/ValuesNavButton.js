import React from 'react';
import styled from 'styled-components';

const activeStyles = ({ active }) =>
  active
    ? `
  font-weight: 600;
  opacity: 1;
`
    : '';

const backgroundColor = ({ index }) => {
  const backgrounds = [
    '#3051a3',
    '#65b5fc',
    '#105677',
    '#6bc2ce',
    '#2890d7',
    '#4873b0',
    '#0d257b',
  ];

  return `&:nth-of-type(${index + 1}):before {
    background-color: ${backgrounds[index]};
  }
  `;
};

const StyledValuesNavButton = styled.button`
  position: relative;
  flex: 1;
  padding: 0.75rem 1.5rem 0 0;
  font-size: 0.891rem;
  line-height: 1.4;
  text-align: left;
  cursor: pointer;
  background: none;
  border: none;
  opacity: 0.6;
  transition: transform 0.2s;
  ${activeStyles};

  &:hover {
    transform: scale(1.06);
  }

  &:focus {
    outline: none;
  }

  &::before {
    position: absolute;
    top: -2px;
    right: 4.5rem;
    left: 0;
    height: 4px;
    content: '';
    background: black;
  }

  ${backgroundColor};
`;

const ValuesNavButton = ({
  setActivePost,
  index,
  activePost,
  post: { id, title },
}) => (
  <StyledValuesNavButton
    onClick={() => {
      setActivePost(index);
    }}
    active={index === activePost}
    key={id}
    index={index}
    dangerouslySetInnerHTML={{ __html: title.rendered }}
  />
);

export default ValuesNavButton;
