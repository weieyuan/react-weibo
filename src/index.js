import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import store from "@/store";

//设置clientId,user
store.mutations.setClientId(store.state, Math.random().toString(36).slice(2));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
