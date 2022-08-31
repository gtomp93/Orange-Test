import React from 'react';
import styled, { keyframes } from 'styled-components';
import Orange from './assets.js/orange.png';

const LOADING = () => {
  return (
    <>
      <p>Loading</p>
      <PICTURE src={Orange} />
    </>
  );
};

export default LOADING;

const spin = keyframes`
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
`;

const PICTURE = styled.img`
  width: 100px;
  height: 100px;
  animation: ${spin} 2000ms linear infinite;
`;
