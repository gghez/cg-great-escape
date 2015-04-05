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
                        src: [
                            'src/utils.js',
                            'src/astar/*',
                            'src/board.js',
                            'src/index.js'
                        ],
                        dest: 'dist/great-escape.js'
                    }
                ]
            }
        },

        watch: {
            src: {
                files: 'src/**/*.js',
                tasks: ['compile']
            }
        },

        strip_code: {
            dist: {
                src: 'dist/great-escape.js'
            }
        }
    });

    grunt.registerTask('compile', ['concat:src', 'strip_code:dist', 'jshint:dist']);
};