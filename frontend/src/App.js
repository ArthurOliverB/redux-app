import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './views/Home';
import Nav from './components/template/Nav';
import { Layout } from 'antd';

const { Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Nav></Nav>
        <Content>
          <Home></Home>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
