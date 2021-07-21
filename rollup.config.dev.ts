import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import livereload from 'rollup-plugin-livereload';
import { defineConfig } from 'rollup';
import dev from 'rollup-plugin-dev';
import path from 'path';

import pkg from './package.json';

const extensions = ['.js', '.ts'];

const resolve = (...args) => path.resolve(__dirname, ...args);

export default defineConfig({
    input: resolve('./src/main.ts'),
    output: [
        {
            file: resolve('./', pkg.main),
            format: 'umd',
            // 一般指向pkg.name 就可以了 ， 这里是demo 就先写死一个
            name: 'WebPageConfirmEnvironment',
            // 方便出现问题定位调试
            sourcemap: true
        },
        {
            file: resolve('./', pkg.module),
            format: 'es',
            name: pkg.name,
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            sourceMap: true
        }),
        nodeResolve({
            extensions,
            modulesOnly: true
        }),
        dev({
            port: '6666',
            host: 'localhost',
            spa: './examples/index.html',
            force: true
        }),
        livereload()
    ]
});
