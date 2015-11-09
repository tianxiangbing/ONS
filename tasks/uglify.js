module.exports = {
	jsmin: {
		files: {
			'site/dist/js/ONS.js': ['site/src/js/**/*.js'],
			'site/dist/js/templates.js': ['site/js-cache/templates.js'],
		}
	},
	lib_uglify: {
		files: [{
			expand: true,
			cwd: 'site/src/lib/',
			src: ['dialog/*.js','local*/*.js'],
			dest: 'site/dist/lib'
		}]
	}
}