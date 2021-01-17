module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: 'airbnb',
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".json", ".native.js"]
      }
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
    "eslint-plugin-react"
  ],
  rules: {
    "no-console": "off",
    "no-param-reassign": 0,
    "react/jsx-filename-extension": [1, 
      { "extensions": [".js", ".jsx"] 
    }],
  },
};
