import svgSprite from "gulp-svg-sprite";

export const svgSprive = () => {
   return app.gulp.src(`${app.path.src.svgicons}`, {})
   .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
         title: "SVG",
         message: "Error: <%= error.message %>"
      }))
   )
   .pipe(app.gulp.dest(`${app.path.build.svgicons}`)) // может не нужно
   .pipe(svgSprite({
      mode:{
         stack:{
            sprite: `../icons/sprite.svg`,
            // Создать страницу с перечнем иконок
            // example: true
         }
      },
   }))
   .pipe(app.gulp.dest(`${app.path.build.images}`));
}