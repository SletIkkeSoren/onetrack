import React from 'react';
import { render } from 'react-dom'
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import store from './redux/store';

// import App from './App';

import Root from './components/Root'

render(<Root store={store} />, document.getElementById('root'))

