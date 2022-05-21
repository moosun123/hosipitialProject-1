/*
 * @Author: xinyu.bai
 * @Date: 2022-04-17 18:48:07
 * @LastEditors: xinyu.bai
 * @LastEditTime: 2022-05-02 00:06:22
 * @Description: 
 */


module.exports = {
  'env': {
    'browser': true,
    // "es2021": true,
    'es6': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks'
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    'import/extensions': ['off'],
    'no-debugger': ['off'],
    'react/no-array-index-key': ['off'],
    'max-lines': ['error', {
      'max': 500,
      'skipComments': true,
      'skipBlankLines': true
    }],
    'indent': [ 'error',2 ],
    'quotes': [
      1,
      'single'
    ],
    'semi': [
      0,
      'always'
    ]
  }
};
