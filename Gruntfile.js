function config(name) {
	return require('./tasks/' + name + '.js');
}

module.exports = function(grunt) {
	var cfg = {
		pkg:grunt.file.readJSON('package.json'),
		watch: config('watch'),
		concat:config('concat'),
		emberTemplates:config('emberTemplates')
	}
	console.log("=====================")
	console.log(cfg)
	grunt.initConfig(cfg);
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.registerTask('default', []);
};