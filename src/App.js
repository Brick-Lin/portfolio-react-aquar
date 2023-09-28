import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
 
//路由元件匯入
import Header from './components/Header';
import HeaderForPages from './components/HeaderForPages'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MouseLight from './components/MouseLight';
import Home from './components/Home';

import Test from './components/Test';

//樣式匯入
import './assets/all.scss';

class App extends Component {

  

  render() {
    return (
      <Router>
        <div>
          <Header />
          <HeaderForPages />

          <Switch>
            <Route path="/" component={Home} exact/> 
            <Route path="/test" component={Test} exact/> 
          </Switch>

          <Sidebar />
          <Footer link1="回到首頁" link2="預約訂票" link3="館場導覽" link4="聯絡我們" link5="常見問答"
              linkHref1="/" linkHref2="/" linkHref3="/" linkHref4="/" linkHref5="/"
          />
          <MouseLight />
        </div> 
      </Router>
    );
  }
}
 
export default App;
