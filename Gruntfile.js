/*
 * Assemble, component generator for Grunt.js
 * https://github.com/assemble/
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    site: grunt.file.readJSON('src/data/site.json'),

    assemble: {
      // Task-level options
      options: {
        prettify: {indent: 2},
        marked: {sanitize: false},
        production: true,
        data: 'src/**/*.{json,yml}',
        assets: '<%= site.destination %>/assets',
        layoutdir: '<%= site.layout %>',
        partials: ['<%= site.partials %>'],
      },
      site: {
        // Target-level options
        options: {
          layout: 'default.hbs'
        },
        files: [
          { expand: true,
            cwd: '<%= site.pages %>',
            src: ['**/*.hbs'],
            dest: '<%= site.destination %>/' },
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 9999,
          base: '<%= site.destination %>'
        }
      }
    },

    watch: {
      css: {
        files: '<%= site.assets %>/css/**.*',
        tasks: ['copy']
      },
      js:{
        files: '<%= site.assets %>/js/**.*',
        tasks: ['copy']
      },
      fonts:{
        files: '<%= site.assets %>/fonts/**.*',
        tasks: ['copy']
      },
      images:{
        files: '<%= site.assets %>/images/**.*',
        tasks: ['copy']
      },
      html:{
        files: 'src/**/*.hbs',
        tasks: ['assemble']
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ['<%= site.assets %>/**'],
            dest: '<%= site.destination %>/'
          },
        ],
      },
    },

    clean: {
      all: ['<%= site.destination %>/**']
    }
  });

  // Load npm plugins to provide necessary tasks.


 [
    'assemble',
    'grunt-contrib-clean',
    'grunt-contrib-copy',
    'grunt-contrib-connect',
    'grunt-contrib-watch'
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

  // Default task to be run.

  grunt.registerTask('build', ['clean', 'assemble','copy']);
  grunt.registerTask('watch-build', ['clean', 'assemble','copy', 'watch']);

};
