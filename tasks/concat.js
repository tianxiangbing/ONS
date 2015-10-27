module.exports = {
    options: {		
        separator: '\n'
	},
	dist: {
        src: ['site/src/app.js', 'site/src/**/*.js'],
        dest: 'site/dist/<%= pkg.name %>.js'
	}
};