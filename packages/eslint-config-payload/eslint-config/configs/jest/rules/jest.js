/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/expect-expect': 'error',
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-large-snapshots': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-done-callback': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-title': 'error',
  },
}
