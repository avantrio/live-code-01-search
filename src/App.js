import React from 'react';
import Home from './Home';
//import 'antd/dist/antd.css';
import './SearchApp.css';

function App() {
  return (
    <div >
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-md-2 sidebar"  >
            One of three columns
          </div>
          <div class="col">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
