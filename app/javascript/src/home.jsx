// home.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import Layout from './layout';
import './home.scss';

const Home = () => (
  <Layout>
    <h1>Home page webpack dev server working</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.body.appendChild(document.createElement('div')));
  root.render(<Home />);
})