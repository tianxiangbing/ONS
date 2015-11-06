module.exports = {
		options: {
			compatibility: 'ie8', //设置兼容模式 
			noAdvanced: true //取消高级特性 
		},
		target: {
			files: [{
				expand: true,
				cwd: 'site/src/css',
				src: ['*.css', '!*.min.css'],
				dest: 'site/dist/css',
				ext: '.css'
			}]
		}
	}