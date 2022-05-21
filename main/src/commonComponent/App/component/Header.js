/*
 * @Author: xinyu.bai
 * @Date: 2022-04-17 18:07:30
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 23:37:59
 * @Description:
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {LeftOutlined} from '@ant-design/icons';

const Header = (props) => {
  const {
    leftEvent,
    rightEvent,
    titleElement
  } = props;
  return <div>
    <Button   className='left-button' onClick={leftEvent}>
      <LeftOutlined />
    </Button>
    <div className='title'>{titleElement}</div>
    <Button    className='right-button'onClick={rightEvent}></Button>
  </div>;
};

Header.propTypes = {
  leftEvent:PropTypes.func,
  rightEvent:PropTypes.func,
  titleElement:PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};
 
export default Header;