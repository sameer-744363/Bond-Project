import './App.css';
import React from 'react'
import { useRoutes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  const routes = useRoutes([
    { path: '/page1', element: <Page1 /> },
    { path: '/page2', element: <Page2 /> },
  ]);

  return routes;
};

export default App
