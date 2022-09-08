module.exports = {
    "env": {
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
          "files": [
            "**/*.spec.js",
            "**/*.spec.jsx"
          ],
        }
      ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}