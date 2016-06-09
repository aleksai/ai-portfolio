import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const router = <Router routes = {routes} history = {appHistory} />;
ReactDOM.render(router, document.getElementById('app'));