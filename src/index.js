import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/*
React 18 introduces a new root API which provides better
ergonomics for managing roots. The new root API also 
enables the new concurrent renderer, which allows you 
to opt-into concurrent features.

// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); 
// createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

We’ve also changed unmountComponentAtNode to root.unmount:

// Before
unmountComponentAtNode(container);

// After
root.unmount();
*/