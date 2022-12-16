const tsConfigs = ['./tsconfig.json', './tsconfig.eslint.json'];

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:compat/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended"
    ],
    plugins: [
        '@typescript-eslint',
        "compat",
        "deprecate",
        "import",
        "sonarjs",
        "unicorn",
    ],
    ignorePatterns: ["**/dist/**", "**/node_modules/**"],
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: tsConfigs,
            },
        }
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        project: tsConfigs,
    },
    rules: {
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "camelcase": ["error", { "properties": "always" }],
        "complexity": ["error", 10],
        "default-case-last": "error",
        "eqeqeq": ["error", "always"],
        "import/default": 2,
        "import/extensions": 2,
        "import/no-commonjs": 2,
        "import/no-self-import": 2,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 2,
        "import/no-useless-path-segments": 2,
        "import/order": [
            "warn", {
                "alphabetize": { "order": "asc", "caseInsensitive": true },
                "groups": ["type", "builtin", "external", "internal", "parent", "sibling", "index", "object"],
                "pathGroupsExcludedImportTypes": ["builtin"],
                "newlines-between": "always"
            }
        ],
        "linebreak-style": ["error", "unix"],
        "max-depth": ["error", 4],
        "max-lines": ["error", { "max": 250, "skipComments": true, "skipBlankLines": true }],
        "max-params": ["error", 6],
        "new-cap": ["error", { "capIsNewExceptions": ["Router"] }],
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-eval": "error",
        "no-lone-blocks": "error",
        "no-mixed-operators": "error",
        "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
        "no-return-await": "error",
        "no-self-assign": 0,
        "no-self-compare": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "no-useless-concat": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "no-implicit-coercion": 2,
        "no-negated-condition": 2,
        "object-shorthand": ["error", "properties"],
        "operator-assignment": ["error", "always"],
        "prefer-const": ["error", { "destructuring": "all" }],
        "prefer-object-spread": "error",
        "prefer-spread": "error",
        "require-returns-description": 0,
        "semi-spacing": "error",
        "sonarjs/cognitive-complexity": 0,
        "sonarjs/no-duplicate-string": 0,
        "sonarjs/no-nested-template-literals": 0,
        "spaced-comment": ["error", "always", { "markers": ["/"] }],
        "template-curly-spacing": "error",
        "unicorn/filename-case": ["error", { "cases": { "camelCase": true, "pascalCase": true } }],
        "unicorn/no-null": 0,
        "unicorn/no-array-for-each": 0,
        "unicorn/no-array-reduce": 0,
        "unicorn/no-await-expression-member": 0,
        "unicorn/no-new-array": 0,
        "unicorn/no-thenable": 0,
        "unicorn/no-useless-undefined": 0,
        "unicorn/numeric-separators-style": ["error", { "onlyIfContainsSeparator": true }],
        "unicorn/prefer-module": 0,
        "unicorn/prefer-node-protocol": 0,
        "unicorn/prefer-number-properties": 0,
        "unicorn/prefer-query-selector": 0,
        "unicorn/prefer-switch": 0,
        "unicorn/prefer-ternary": ["error", "only-single-line"],
        "unicorn/prevent-abbreviations": 0,
        "unicorn/prefer-top-level-await": 0,
        "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "@typescript-eslint/comma-dangle":  ["error", "never"],
        "@typescript-eslint/naming-convention": ["error", { "selector": "typeLike", "format": ["PascalCase"] }],
        "@typescript-eslint/consistent-type-imports": 2,
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
        "@typescript-eslint/type-annotation-spacing": 1,
        "@typescript-eslint/consistent-type-definitions": 0,
        "@typescript-eslint/default-param-last": 2,
        "@typescript-eslint/indent": ["error", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/keyword-spacing": 2,
        "@typescript-eslint/no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
        "@typescript-eslint/object-curly-spacing": ["error", "always", { "objectsInObjects": true }],
        "@typescript-eslint/quotes": ["error", "single"],
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/semi": ["error", "always", { "omitLastInOneLineBlock": true }],
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-confusing-void-expression": ["warn", { ignoreArrowShorthand: true }],
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/comma-spacing": "warn"
    },
};
