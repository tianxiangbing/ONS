module.exports ={
		compile: {
			options: {
				templateName: function(sourceFile) {
					return sourceFile.replace(/site\/src\/templates\//, '');
				}
			},
			files: {
				"site/dist/templates.js": "site/src/templates/**/*.hbs"
			}
		}
}