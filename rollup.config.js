import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

const input = ["src/index.ts"];
export default [
  // ESM and CJS
  {
    input,
    plugins: [
      nodeResolve({
        jsnext: true,
        extensions: [".ts"],
      }),
      commonjs(),
      babel({
        babelHelpers: "bundled",
      }),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          module: "esnext",
        },
      }),
    ],
    output: {
      dir: "out",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    watch: {
      include: ["src/**", "grammar/**"],
    },
  },
];
