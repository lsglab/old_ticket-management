import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'www/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,

			//Somehow both options for preprocessing are very resource intensive...
			//find a way to decrease this or import tailwind css in another way

			//preprocess any styles, this is needed for tailwindcss import
			preprocess: sveltePreprocess({ 
				postcss: true,
				sourceMap : production
			}),

			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({ browser: true }),
		commonjs(),

		// Watch the www/ directory and refresh the
		// browser on changes when not in production
		!production && livereload('www/'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	},
};
