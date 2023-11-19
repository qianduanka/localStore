import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: './index.js',
  output: [
    {
      file: './dist/index.min.js',
      name: 'index.min',
      format: 'umd'
    },
    {
      file: './dist/index.es.js',
      name: 'index.es',
      format: 'es'
    }
  ],
  plugins: [babel({ babelHelpers: 'bundled' }), terser()],
};
