/*
 * @Author: xinyu.bai
 * @Date: 2022-04-05 14:21:58
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 23:35:02
 * @Description: 
 */
import React, {  useState} from 'react';

function Login () {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

 
export default Login;
