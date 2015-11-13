function config(name) {
	return require('./tasks/' + name + '.js');
}

module.exports = function(grunt) {
	var cfg = {
		pkg: grunt.file.readJSON('package.json'),
		watch: config('watch'),
		concat: config('concat'),
		copy: config('copy'),
		emberTemplates: config('emberTemplates'),
		cssmin: config('cssmin'),
		sass: config('sass'),
		connect: config('connect'),
		uglify: config('uglify'),
		clean: config('clean')
	}
	console.log("=====================")
		//console.log(cfg)
	grunt.initConfig(cfg);
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['connect', 'watch']);
	//build js
	grunt.registerTask("js", ['clean', 'emberTemplates:compile', 'uglify','clean']);
	grunt.registerTask("css", [ 'sass', 'cssmin']);
	//build
	grunt.registerTask('build', ['js']);
};