module.exports ={
	html:{
		files:['site/**/*.html'],
		options: {
			livereload: 35729,
		}
	},
	scripts: {
		files: ['site/src/js/**/*.js'],
		options: {
			livereload: 35729,
		},
		tasks:['concat','copy']
	},
	emberTemplates: {
		files: 'site/src/**/*.hbs',
		options: {
			livereload: 35729,
		},
		tasks: ['emberTemplates:copy']
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
		tasks:['cssmin']
	},
	sass:{
		files:['site/src/scss/*.scss'],
		options:{
			livereload:35729
		},
		tasks:["sass",'cssmin']
	},
	font:{
		files:  ['*.eot','*.svg','*.ttf','*.woff'],
		options:{
			livereload:35729
		},
		tasks:["copy"]
	}
}