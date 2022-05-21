/*
 * @Author: xinyu.bai
 * @Date: 2022-04-16 19:14:04
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 23:34:42
 * @Description: 
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import './index.css';


const ListView = (props) =>{
  const {dataSource, columns} = props;
  if(!dataSource || !dataSource.length) {
    return <div>暂无数据</div>;
  }
  return (
    <div className='list-container'>
      {
        dataSource.map((item,index) =>{
          const {title, name} = item;
          return (
            <div className='list-item' key={index}>
              <h3>{title || name}</h3> 
              {
                columns.map(colItem => {
                  const { title: colTitle, dataIndex, render} = colItem;
                  return (
                    <div key={dataIndex}>
                      <span>{colTitle}:</span>
                      {render ? render(dataSource[index]) : <span>{item[dataIndex]}</span>}
                    </div>
                  );
                })
              }
            </div>
          );}
        )
      }
    </div>
  );
};

ListView.propTypes = {
  dataSource:PropTypes.array, 
  columns:PropTypes.object
}

export default ListView;