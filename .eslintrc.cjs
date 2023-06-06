module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        '@antfu/eslint-config-vue',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        'vue/html-indent': ['error', 4],
        'indent': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        '@typescript-eslint/semi': ['error', 'always'],
    },
};
