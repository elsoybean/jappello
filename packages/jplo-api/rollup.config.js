// @flow
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
//import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      module: true,
      preferBuiltins: true,
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: true,
            },
          },
        ],
        '@babel/preset-flow',
      ],
    }),
    commonjs({
      namedExports: {
        'node_modules/graphql-tools/dist/index.js': ['makeExecutableSchema'],
      },
    }),
    //terser(),
  ],
};
