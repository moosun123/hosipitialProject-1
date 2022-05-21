/*
 * @Author: xinyu.bai
 * @Date: 2022-04-05 14:10:39
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 00:10:38
 * @Description: 
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
