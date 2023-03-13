module.exports = {
  extends: ["airbnb-base"],
  rules: {
    "no-console": "off",
  },
  // node: true,
  // parseOptions:{
  //   ecmaVersion:''
  // }
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
};
