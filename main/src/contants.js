/*
 * @Author: xinyu.bai
 * @Date: 2022-04-05 14:34:05
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 00:10:47
 * @Description: 
 */


const MenuEnum = {
  1: {
    key:'addHospital',
    value:'添加社保医院'
  },
  2: {
    key:'showHospital',
    value:'查看社保医院'
  },
  3: {
    key:'showAppointment',
    value:'查看预约'
  },
}


const MenuRouteItem = [{
  name: '查看医院',
  path: '/showHospital',
  desc: '查看社保医院',
  key: 1,
},{
  name: '添加医院',
  path: '/addHospital',
  desc: '添加社保医院',
  key: 2,
},{
  name: '预约信息',
  path: '/showAppointment',
  desc: '查看预约信息',
  key: 3,
},{
  name: '首页',
  path: '/home',
  desc: '首页',
  key: 0,
  disabled: true,
},{
  name: '登陆',
  path: '/login',
  desc: '登陆',
  key: 4,
  disabled: true,
} ]

export  {
  MenuEnum,
  MenuRouteItem
}