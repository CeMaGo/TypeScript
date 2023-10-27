module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",

    "overrides": [
         {
        files: ["tests /**/*.ts"],
        env: { "node": true, "jest": true},
    },
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            extends: ["plugin:@typescript-eslint/disable-type-checked"],
            rules: {
              "@typescript-eslint/no-unsafe-assignment": "off",
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": true,
        "tsconfigRootDir": _dirname,
        "sourceType": "module"
    },
     "plugins": ["@typescript-eslint"],
   "rules": {
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-params": "off"
   },
   
    "files": "tests/**/*.ts",
    "env": { "node": true, "jest": true }
},
extends: ["plugin:@typescript-eslint/disable-type-checked"],
rules: {
  "@typescript-eslint/no-unsafe-assignment": "off",
}
    

