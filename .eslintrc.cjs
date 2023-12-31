module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
		"airbnb",
		'airbnb-typescript',
		"airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
		project: './tsconfig.json'
    },
    "plugins": [
        "react",
        "@typescript-eslint",
		"prettier"
    ],
    "rules": {
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'state',
			]
		}],
		'import/no-named-as-default': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-no-useless-fragment': 0,
		'react/function-component-definition': 0,
		'react/button-has-type': 0,
		'react/jsx-props-no-spreading': 0,
		'prettier/prettier': [
			'error',
			{
				'endOfLine': 'auto',
			}
		],
		'no-nested-ternary': 0,
		'import/no-extraneous-dependencies': 0,
		"jsx-a11y/label-has-associated-control": ["error", {
			"required": {
				"some": ["nesting", "id"]
			}
		}],
		"jsx-a11y/label-has-for": ["error", {
			"required": {
				"some": ["nesting", "id"]
			}
		}],
		'import/prefer-default-export': 0,
		'@typescript-eslint/default-param-last': 0,
		'no-self-assign': 0,
		'import/no-cycle': 0,
		'array-callback-return': 0,
		'jsx-a11y/control-has-associated-label': 0,
		'react/require-default-props': 0,
		'@typescript-eslint/no-shadow': 0
    }
}
