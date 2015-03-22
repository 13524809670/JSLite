// 包装函数
module.exports = function(grunt) {
    // 任务配置,所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // uglify插件的配置信息
        uglify: {
            options: {
                banner: '/*! http://JSLite.io - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            app_task: {
                files: {
                    'build/JSLite.min.js': ['src/ie.js', 'src/JSLite.js']
                }
            }
        },
        // watch插件的配置信息
        watch: {
            another: {
                files: ['src/*.js','build/*.js'],
                tasks: ['uglify'],
                options: {
                    // Start another live reload server on port 1337
                    livereload: 1337
                }
            }
        }
    });
    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['uglify','watch']);
 
};