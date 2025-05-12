import eslintPluginCypress from "eslint-plugin-cypress";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      cypress: eslintPluginCypress
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "no-unused-vars": "warn",
      "no-console": "warn"
    }
  }
];