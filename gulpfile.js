var gulp = require("gulp");
var spritesmith = require("gulp.spritesmith");

var path = {
    icon : 'icon/*.png', // 图标路径
    spritePath : 'sprites'   // 输出路径
}
/**
* 雪碧图
*/
gulp.task("sprite-css", function () {
    var spriteData = gulp.src(path.icon)
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            padding: 5
        }));
    return spriteData.pipe(gulp.dest(path.spritePath));
});

gulp.task("sprite-scss", function () {
    var spriteData = gulp.src(path.icon)
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            cssFormat: 'scss',
            padding: 5,
            cssTemplate: 'scss.template.mustache',
            cssOpts: 'spriteSrc'
        }));
    return spriteData.pipe(gulp.dest(path.spritePath));
});

gulp.task("sprite-scss-default", function () {
    var spriteData = gulp.src(path.icon)
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            cssFormat: 'scss',
            padding: 5,
        }));
    return spriteData.pipe(gulp.dest(path.spritePath));
});

// 压缩图片
// gulp.task("compress",function () {
//     return gulp.src(path.spritePath)
//         .pipe(imagemin({
//             interlaced: true
//         }))
//         .pipe(gulp.dest(path.spritePath))
// });


// MAC 打开文件目录
// gulp.task('sprite:open', function() {
//   gulp.src('')
//     .pipe(open({app: 'Finder', uri: spritePath}));
// })
