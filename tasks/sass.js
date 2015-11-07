module.exports = {
	dist: {
		options: {
			sourcemap: "none",
			// style: 'compressed',
		},
		files: [{
			expand: true,
			cwd: "site/src/scss",
			src: ['**/*.scss'],
			dest: 'site/src/css',
			ext: '.css'
		}]
	}
}