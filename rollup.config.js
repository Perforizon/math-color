import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from "rollup-plugin-terser";
import glob from "rollup-plugin-multi-input";

export default {
    input: ['./src/**/*'],
    output:
    {
        dir: "./build",
        format: "es",
        sourcemap: true,
    },
    plugins: [
        resolve(),
        glob(),
        terser(),
        typescript({ useTsconfigDeclarationDir: true }),
    ],
    preserveModules: true
}