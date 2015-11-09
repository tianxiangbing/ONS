module.exports = {
	compile: {
		options: {
			templateName: function(sourceFile) {
				return sourceFile.replace(/site\/src\/templates\//, '');
			}
		},
		files: {
			"site/js-cache/templates.js": "site/src/templates/**/*.hbs"
		}
	},
	copy:{
		options: {
			templateName: function(sourceFile) {
				return sourceFile.replace(/site\/src\/templates\//, '');
			}
		},
		files: {
			"site/dist/js/templates.js": "site/src/templates/**/*.hbs"
		}
	}
}