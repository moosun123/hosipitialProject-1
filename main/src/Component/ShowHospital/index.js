/*
 * @Author: xinyu.bai
 * @Date: 2022-04-16 17:47:22
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 23:35:19
 * @Description: 
 */

import React  from 'react';
import PropTypes from 'prop-types';
import {  Button } from 'antd';
import './index.css';
import ListView from '../../commonComponent/ListView';

const dataSource = [
  {
    id:1,
    name:'中日友好医院',
    value:'1',
    distance:'1.1km',
    level:'三级甲等'
  }, {
    id:2,
    name:'协和医院',
    value:'2',
    distance:'1.2km',
    level:'三级甲等'
  }, {
    id:3,
    name:'协和医院',
    value:'2',
    distance:'1.2km',
    level:'三级甲等'
  }, {
    id:4,
    name:'协和医院',
    value:'2',
    distance:'1.2km',
    level:'三级甲等'
  }, {
    id:5,
    name:'协和医院',
    value:'2',
    distance:'1.2km',
    level:'三级甲等'
  },
];


const ShowHospital= (props) => {
  const columns = [
    {
      title:'医院名称',
      dataIndex:'name',
    },{
      title:'距离',
      dataIndex:'distance',
    },{
      title:'等级',
      dataIndex:'level',
    },{
      title:'操作',
      render:(row)=> {
        const { goDetail, onDeleteItem} = props;
        return <div>
          <Button type='link' className='button-check' onClick={()=>goDetail(row)}>查看</Button>
          <Button type='link' onClick={()=>onDeleteItem(row)}>删除</Button>
        </div>;
      }
    },
  ];
  return <div className='container'>
    {/* <Button onClick={goAddHospitial}>添加社保医院</Button> */}
    <ListView dataSource={dataSource} columns={columns}></ListView>
  </div>; 
};

ShowHospital.propTypes = {
  goAddHospitial:PropTypes.func,
  goDetail:PropTypes.func,
  onDeleteItem:PropTypes.func

};

export default ShowHospital;