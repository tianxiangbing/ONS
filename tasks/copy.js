module.exports = {
  main: {
    files: [
      // includes files within path and its sub-directories
      {
        expand: true,
        src: ['**'],
        cwd:'site/src/lib',
        dest: 'site/dist/lib',
        filter: 'isFile'
      }
    ]
  }
};