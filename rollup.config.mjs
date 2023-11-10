import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: './index.js',
  output: [
    {
      dir: './dist',
      name: 'index',
      format: 'umd',
    },
  ],
  plugins: [babel({ babelHelpers: 'bundled', exclude: 'json3.js' }), terser()],
};
