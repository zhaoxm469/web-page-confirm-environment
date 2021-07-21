module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        'import/resolver': {
            'my-awesome-npm-module': { someConfig: value }
        }
    },
    extends: [
        // eslint 推荐规则
        'eslint:recommended',
        // ts 推荐规则
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        indent: [2, 4],
        'no-console': 0,
        'comma-dangle': 0,
        'import/no-extraneous-dependencies': 0
    },

};
