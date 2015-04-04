module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        jshint: {
            src: {
                src: ['src/**/*.js']
            },
            dist: {
                src: ['dist/**/*.js']
            }
        },

        concat: {
            src: {
                files: [
                    {
                        src: ['src/debug.js', 'src/utils.js', 'src/init.js', 'src/astar/*', 'src/index.js'],
                        dest: 'dist/great-escape.js'
                    }
                ]
            }
        },

        watch: {
            src: {
                files: 'src/**/*.js',
                tasks: ['concat:src']
            }
        }
    });

    grunt.registerTask('compile', ['concat:src', 'jshint:dist']);
};