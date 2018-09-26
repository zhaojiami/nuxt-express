module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential'//, 'eslint:recommended', 'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': 0,
    'vue/html-indent': 0,
    'vue/max-attributes-per-line': 0,
    'vue/order-in-components': 0,
    'vue/html-end-tags': 0,
    'vue/no-parsing-error': 0
  }
}
