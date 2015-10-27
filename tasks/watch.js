module.exports ={
	scripts: {
		files: ['site/src/**/*.js'],
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
		tasks: ['emberTemplates', 'concat']
	}
}