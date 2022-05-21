/*
 * @Author: xinyu.bai
 * @Date: 2022-04-05 00:13:05
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 23:37:32
 * @Description: 
 */
import React from 'react';
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd';
import { Router,Link } from 'react-router-dom';
import Header from './component/Header';
import History from '../../config/history';
import { MenuRouteItem } from '../../contants';
import './index.css';


const { Content } = Layout;


const App = (props) => {
  console.log(props);
  const {children} = props;
  return (
    <Router history={History}>
      <Layout>
        <Header left>
          <div className="logo" ></div>
          <Menu mode="horizontal" defaultSelectedKeys={ MenuRouteItem[0].key}>
            {
              MenuRouteItem.map(routeItem => {
                const {path, name, key, disabled} = routeItem;
                if(!disabled){
                  return  <Menu.Item key={key}>
                    <Link to={path}>{name}</Link>
                  </Menu.Item>;
                }
              })
            }
          </Menu>
        </Header>
        <Content className="site-layout" >
          <div className="site-layout-background" style={{ minHeight: 380 }}>
            {children}
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Router>
  );
};

App.propTypes = {
  children:PropTypes.object
}

export default App;
