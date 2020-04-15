module.exports = {
  parser:'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '@react-native-community',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],//在JS文件中允许存在JSX语法
    "global-require":"off",  // image指定source时要用require语句
    "indent":["error",2], // 缩进规则为4个空格
    "react/jsx-indent":["error",2], // 缩进规则为4个空格
    "react/jsx-indent-props":["error",2], // 缩进规则为4个空格
    "react/prop-types":["error",{"ignore":["tintColor","navigation"]}],
    "react/no-multi-comp":["error",{"ignoreStateless":true}],
    "react/prefer-stateless-function":["error",{"ignorePureComponents":true}],
    "max-len" : ["error", {code : 100}],
    "react-native/no-inline-styles": 1,
    "semi": [2, "always"], // 強制要加分號
    "semi-spacing": [0, {"before": false, "after": true}], //分号前后空格
    "no-dupe-keys": 2,  // 不允许键重复 { a:1, a:1 }
    "no-dupe-args": 2,  // 函数参数不能重复
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
    "no-irregular-whitespace": 2, // 不能有不规则的空格
    "quotes": [1, "single"],//引号类型 `` "" ''
    // "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
    // "react-native/no-inline-styles": ["error",2],
    "object-curly-spacing": ["error", "always", { "arraysInObjects": false }],
    "space-in-parens": [0, "never"],//小括号里面要不要有空格
    "space-infix-ops": 1,//中缀操作符周围要不要有空格
    // "space-return-throw-case": 2,//return throw case后面要不要加空格
    "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    "prettier/prettier": ["error", {
      "no-inline-styles": false
    }],
    "comma-spacing": ['error', { before: false, after: true }],
    "keyword-spacing": 2
  },
};
