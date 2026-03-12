import jsdoc from "eslint-plugin-jsdoc";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  jsdoc.configs["flat/recommended"],
  {
    plugins: {
      jsdoc,
    },
    rules: {
      "jsdoc/require-description": "warn",
      "jsdoc/require-param": "warn",
      "jsdoc/require-returns": "warn",
      "jsdoc/require-example": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
