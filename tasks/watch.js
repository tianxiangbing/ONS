module.exports ={
	scripts: {
		files: ['site/src/js/**/*.js'],
		options: {
			livereload: 35729,
		},
		tasks:['concat']
	},
	emberTemplates: {
		files: 'site/src/**/*.hbs',
		options: {
			livereload: 35729,
		},
		tasks: ['emberTemplates']
	},
	lib: {
		files: ['site/src/lib/**/*.js','site/src/lib/**/*.css'],
		options: {
			livereload: 35729,
		},
		tasks:['copy']
	},
	css:{
		files:['site/src/**/*.css'],
		options: {
			livereload: 35729,
		},
		task:['cssmin']
	}
}