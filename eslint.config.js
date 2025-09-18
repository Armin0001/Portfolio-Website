import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    rules: {
      "no-unused-vars": "off", // handled by @typescript-eslint
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off", // don’t force return types on every function
      "@typescript-eslint/no-explicit-any": "off", // allow 'any'
      "react/prop-types": "off", // TS handles props typing
      "react/react-in-jsx-scope": "off", // not needed with React 17+
      "react/jsx-uses-react": "off", // not needed with React 17+
      "react/jsx-uses-vars": "warn", // keep JSX vars usage check
      "react/no-unescaped-entities": "off", // allow ' or " in JSX text
      "@typescript-eslint/ban-ts-comment": "off", // allow ts-ignore if needed
      "import/no-unresolved": "off", // sometimes TS paths trigger false positives
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
