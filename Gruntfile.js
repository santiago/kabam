module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['Gruntfile.js', 'index.js', 'example/**/*.js', 'test/**/*.js']
      },
      ci: {
        options: {
          force: true,
          reporter: 'checkstyle',
          reporterOutput: 'results/jshint-result.xml'
        },
        src: '<%= jshint.all.src %>'
      }
    },
    simplemocha: {
      options: {
        globals: ['should'],
        ignoreLeaks: false,
        ui: 'bdd'
      },
      all: {
        options: {
          reporter: 'spec'
        },
        src: [
          'test/**/*.js',
          'node_modules/kabam-kernel/test/**/*.js',
          'node_modules/kabam-plugin-hogan/test/**/*.js',
          'node_modules/kabam-plugin-notify-email/test/**/*.js',
          'node_modules/kabam-plugin-my-profile/test/**/*.js',
          'node_modules/kabam-plugin-welcome/test/**/*.js',
          'node_modules/kabam-plugin-rest/test/**/*.js',
          'node_modules/kabam-plugin-spine/test/**/*.js'
        ]
      },
      ci: {
        options: {
          reporter: 'tap'
        },
        src: '<%= simplemocha.all.src %>'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // Tasks
  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('testci', ['simplemocha:ci']);
  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);

};
