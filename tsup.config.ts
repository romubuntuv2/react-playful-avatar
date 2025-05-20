import { defineConfig } from 'tsup';
 
export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    splitting: false,
    sourcemap: true,
    minify: false,
    treeshake: true,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
        options.jsx = 'automatic';
    },
    noExternal: [/\.css$/],
    outExtension({ format }) {
        return {
            js: format === 'cjs' ? '.cjs' : '.js'
        }
    }
});