'use strict';

// @ts-ignore
const loadGruntTasks = require('load-grunt-tasks');
// @ts-ignore
const timeGrunt = require('time-grunt');
const serveStatic = require('serve-static');
const sass = require('node-sass');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // Load grunt tasks automatically
  loadGruntTasks(grunt);

  // Time how long tasks take. Can help when optimizing build times
  timeGrunt(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: 'app',
    dist: 'dist',
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    // Project settings
    appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= appConfig.app %>/scripts/**/*.js'],
        tasks: [],
        options: {
          livereload: '<%= connect.options.livereload %>',
        },
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['karma:unit'],
      },
      sass: {
        files: ['<%= appConfig.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'autoprefixer'],
      },
      gruntfile: {
        files: ['Gruntfile.js'],
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>',
        },
        files: [
          '<%= appConfig.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        ],
      },
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
      },
      livereload: {
        options: {
          open: true,
          middleware: (connect) => {
            return [
              serveStatic('.tmp'),
              connect().use('/app/styles', serveStatic('./app/styles')),
              serveStatic(appConfig.app),
            ];
          },
        },
      },
      dist: {
        options: {
          open: true,
          base: '<%= appConfig.dist %>',
        },
      },
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: ['.tmp', '<%= appConfig.dist %>/{,*/}*', '!<%= appConfig.dist %>/.git{,*/}*'],
          },
        ],
      },
      server: '.tmp',
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 4 version'],
      },
      server: {
        options: {
          map: true,
        },
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/',
          },
        ],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/',
          },
        ],
      },
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          '.tmp/styles/main.css': '<%= appConfig.app %>/styles/main.scss',
        },
      },
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= appConfig.dist %>/scripts/{,*/}*.js',
          '<%= appConfig.dist %>/styles/{,*/}*.css',
          '<%= appConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= appConfig.dist %>/styles/fonts/*',
        ],
      },
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= appConfig.app %>/index.html',
      options: {
        dest: '<%= appConfig.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin'],
            },
            post: {},
          },
        },
      },
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= appConfig.dist %>/{,*/}*.html'],
      css: ['<%= appConfig.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= appConfig.dist %>',
          '<%= appConfig.dist %>/images',
          '<%= appConfig.dist %>/styles',
        ],
      },
    },

    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: '<%= appConfig.dist %>/images',
          },
        ],
      },
    },

    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= appConfig.dist %>/images',
          },
        ],
      },
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true,
        },
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.dist %>',
            src: ['*.html', 'views/{,*/}*.html'],
            dest: '<%= appConfig.dist %>',
          },
        ],
      },
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= appConfig.app %>',
            dest: '<%= appConfig.dist %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.{html,php}',
              'views/{,*/}*.html',
              'images/{,*/}*.{webp}',
              'styles/fonts/{,*/}*.*',
            ],
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= appConfig.dist %>/images',
            src: ['generated/*'],
          },
        ],
      },
      styles: {
        expand: true,
        cwd: '<%= appConfig.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css',
      },
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: ['sass'],
      dist: ['sass', 'imagemin', 'svgmin'],
    },

    karma: {
      options: {
        configFile: 'test/karma.conf.js',
      },
      unit: {
        singleRun: true,
      },
      watch: {},
    },
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', (target) => {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    return grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch',
    ]);
  });

  grunt.registerTask('test', ['karma:unit']);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'copy:dist',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
  ]);

  grunt.registerTask('default', []);
};
