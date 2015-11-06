module.exports = {
    options: {		
        separator: '\n'
	},
	dist: {
        src: ['site/src/app.js', 'site/src/js/**/*.js'],
        dest: 'site/dist/js/<%= pkg.name %>.js'
	}
};