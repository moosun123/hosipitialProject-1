/*
 * @Author: xinyu.bai
 * @Date: 2022-04-05 14:39:46
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 00:07:56
 * @Description: 
 */


import React from 'react';
import { Route ,Switch} from 'react-router-dom';
import App from './commonComponent/App';
import { Login, Home, ShowHospital, AddHospital, ShowAppointment } from './Component';

const Routes = () => {
  return ( <App>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/showHospital" component={ShowHospital} />
      <Route path="/addHospital" component={AddHospital} />
      <Route path="/showAppointment" component={ShowAppointment} />
    </Switch>
  </App>
  );
};

export default Routes;