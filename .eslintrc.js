module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.{vue,ts,jsx}'],
      parser: 'vue-eslint-parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'eslint-config-tencent',
        'eslint-config-tencent/ts',
        'prettier',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      rules: {
        'no-multi-spaces': 'error',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['**/*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {},
      extends: ['eslint:recommended', 'eslint-config-tencent'],
    },
  ],
  globals: {},
};
