module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['bower_components/jquery/jquery.js', 'js/global/*.js', '!js/global/global.js', 'js/global/global.js'],
        dest: 'js/global.min.js'
      }
    },
    compass: {                  
      dist: {                  
        options: {              
          sassDir: 'styles/scss',
          cssDir: 'styles/css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },
    watch: {
      styles: {
        files: ['styles/scss/*.scss'],
        tasks: ['compass']
      },
      scripts: {
        files: ['js/global/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'uglify']);
};