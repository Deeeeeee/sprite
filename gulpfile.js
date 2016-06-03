var gulp = require("gulp");
var spritesmith = require("gulp.spritesmith");

/**
* 雪碧图
*/
gulp.task("sprite-css", function () {
    var spriteData = gulp.src('icon/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            padding: 5
        }));
    return spriteData.pipe(gulp.dest('css'));
});

gulp.task("sprite-scss", function () {
    var spriteData = gulp.src('icon/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            cssFormat: 'scss',
            padding: 5,
            cssTemplate: 'scss.template.mustache',
            cssOpts: 'spriteSrc'
        }));
    return spriteData.pipe(gulp.dest('scss/icon'));
});

gulp.task("sprite-scss-default", function () {
    var spriteData = gulp.src('icon/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            cssFormat: 'scss',
            padding: 5,
        }));
    return spriteData.pipe(gulp.dest('scss/icon'));
});

// MAC 打开文件目录
// gulp.task('sprite:open', function() {
//   gulp.src('')
//     .pipe(open({app: 'Finder', uri: configs.spritesOutputPath}));
// })
