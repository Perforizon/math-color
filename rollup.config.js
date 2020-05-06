import typescript from 'rollup-plugin-typescript2';
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
        glob(),
        terser(),
        typescript({ useTsconfigDeclarationDir: true }),
    ],
    preserveModules: true
}