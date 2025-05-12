import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default {
    input: 'dist/demo-prime/fesm2022/salimify-demo-prime.mjs',
    output: [
        {
            file: 'dist/demo-prime/bundles/salimify-demo-prime.umd.js',
            format: 'umd',
            name: 'DemoPrime',
            globals: {
                '@angular/core': 'ng.core',
                '@angular/common': 'ng.common',
                primeng: 'primeng'
            },
            sourcemap: true
        },
        {
            file: 'dist/demo-prime/fesm2022/salimify-demo-prime.min.mjs',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        postcss({ extract: true, minimize: true }),
        terser()
    ],
    external: [
        '@angular/core',
        '@angular/common',
        'primeng'
    ]
};
