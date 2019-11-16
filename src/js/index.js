
import React from 'react';
import { render } from 'react-dom';
import SearchInput from './components/SearchInput';
const url = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/';

render(
  <div className="app-container">
    <SearchInput />
  </div>,
  document.getElementById('root')
);
