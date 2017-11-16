module.exports = {
  "plugins": [
    "jest"
  ],
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "no-unused-vars": [
      "error",
      {
          "args": "none",
      }
    ],
    "no-underscore-dangle": "off",
    "no-use-before-define": ["error", { "functions": false }],
    "class-methods-use-this": ["warn"]
  },
  "env": {
    "jest/globals": true
  },
  "extends": "airbnb-base"
};