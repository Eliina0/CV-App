import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes.jsx/Routes'
import Layout from './components/Layout'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  )
}

export default App