/*
 * @Author: xinyu.bai
 * @Date: 2022-04-05 16:41:24
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 23:37:50
 * @Description: 
 */


import {createBrowserHistory} from 'history';
import _ from 'lodash';
import queryString from 'query-string';
import {Modal} from 'antd'
// import process from 'process';
// import globalConfig from '$config/global';

const  { Confirm } =  Modal;
const BASE_PATH = '/app';

const history = createBrowserHistory({
  basename: BASE_PATH,
  getUserConfirmation(message, callback) {
    Confirm(message).then(yes => callback(yes));
  },
});


Object.keys(history).forEach((key) => {
  const cache = history[key];
  // eslint-disable-next-line no-prototype-builtins
  if (history.hasOwnProperty(key) && typeof cache === 'function') {
    history[key] = function () {
      const len = arguments.length;
      if (len === 0) {
        return cache.apply(this, arguments);
      }

      if (typeof arguments[0] === 'string') {
        const [path, query, ...args] = arguments;
        return cache.apply(this, [`${path}${queryString.stringify(query)}`, ...args]);
      }

      if (_.isObject(arguments[0])) {
        const [pathObj, ...args] = arguments;
        if (pathObj.pathname && pathObj.params) {
          pathObj.search = queryString.stringify(pathObj.params);
          delete pathObj.params;
          return cache.apply(this, [pathObj, ...args]);
        }
      }

      return cache.apply(this, arguments);
    };
  }
});


export default history;

