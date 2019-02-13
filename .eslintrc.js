module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', {
      code: 140,
      tabWidth: 2,
      ignoreUrls: true,
    }],
    'import/extensions': ['error', {
      vue: 'never',
      js: 'never',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'config', // for axios config
      ],
    }],
    'no-tabs': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
