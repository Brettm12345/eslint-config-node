"use strict";
exports.__esModule = true;
var config = {
    env: {
        es6: true,
        node: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint",
        "fp",
        "import",
        "prettier",
        "standard",
        "unicorn"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:unicorn/recommended",
        "standard",
        "prettier",
        "prettier/standard"
    ],
    rules: {
        "arrow-body-style": ["error", "as-needed"],
        "comma-dangle": "off",
        "no-new": "off",
        "no-duplicate-imports": "error",
        "prefer-arrow-callback": "error",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-var-requires": "off",
        "fp/no-arguments": "error",
        "fp/no-class": "error",
        "fp/no-delete": "error",
        "fp/no-events": "error",
        "fp/no-get-set": "error",
        "fp/no-loops": "error",
        "fp/no-mutating-methods": "error",
        "fp/no-proxy": "error",
        "fp/no-this": "error",
        "fp/no-valueof-field": "error",
        "prettier/prettier": "error",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/filename-case": [
            "error",
            {
                "case": "camelCase"
            }
        ]
    },
    settings: {
        "import/resolver": {
            typescript: {}
        }
    }
};
module.exports = config;
//# sourceMappingURL=config.js.map