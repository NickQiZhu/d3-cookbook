module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                process: true
            },
            basic: {
                src: ['src/*.js'],
                dest: '<%= pkg.name %>.js'
            }
        },
        uglify: {
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dist: {
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {
                    'project.css': 'src/project.scss'
                }
            }
        },
        jasmine: {
            coverage: {
                src: ['src/**/*.js'],
                options: {
                    specs: ['spec/**/*_spec.js'],
                    helpers: ['spec/**/*_helper.js'],
                    vendor: ['node_modules/d3/d3.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'build/coverage/coverage.json',
                        report: 'build/coverage',
                        thresholds: {
                            lines: 75,
                            statements: 75,
                            branches: 75,
                            functions: 90
                        }
                    }
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
//    grunt.registerTask('default', ['jasmine', 'jshint', 'sass', 'concat', 'uglify']);
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};