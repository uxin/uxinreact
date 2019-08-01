import React from 'react';
import './App.css';
import { Button } from 'antd-mobile';
import Router from '@/router';

function App() {
  return (
    <div className="App">
      <Router/>
      <Button>测试按钮</Button>
    </div>
  );
}
export default App;
