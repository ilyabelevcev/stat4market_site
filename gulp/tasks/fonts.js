import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
   // Ищу файлы шрифтов .otf
   return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <$= error.message %>"
         }))
      )
      // Конвертирую в .ttf
      .pipe(fonter({
         formats: ['ttf']
      }))
      // Выгружаю в исходную папку
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff = () => {
   // Ищу файлы шрифтов .ttf
   return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <$= error.message %>"
         }))
      )
      // Конвертирую в .woff
      .pipe(fonter({
         formats: ['woff']
      }))
      // Выгружаю в папку с результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      // Ищу файлы шрифтов .ttf
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
      // Конвертирую в .woff2
      .pipe(ttf2woff2())
      // Выгружаю в папку с результатом
      .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}
export const fontsStyle = () => {
   // Файл стилей подключения шрифтов
   let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
   // Проверяю существуют ли файлы шрифтов
   fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
      if (fontsFiles) {
         // Проверяю существует ли файл стилей для подключения шрифтов
         if (!fs.existsSync(fontsFile)) {
            // Если файла нет, создаю его
            fs.writeFile(fontsFile, '', cb);
            let newFileOnly;
            for (var i = 0; i < fontsFiles.length; i++) {
               // Записываю подключение шрифтов в файл стилей
               let fontFileName = fontsFiles[i].split('.')[0];
               if (newFileOnly !== fontFileName) {
                  let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName.split('-')[0];
                  let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName.split('-')[1];
                  if (fontWeight.toLowerCase() === 'thin') {
                     fontWeight = 100;
                  }else if (fontWeight.toLowerCase() === 'extralight') {
                     fontWeight = 200;
                  }else if (fontWeight.toLowerCase() === 'light') {
                     fontWeight = 300;
                  }else if (fontWeight.toLowerCase() === 'medium') {
                     fontWeight = 500;
                  }else if (fontWeight.toLowerCase() === 'semibold' || fontWeight.toLowerCase() === 'demibold') {
                     fontWeight = 600;
                  }else if (fontWeight.toLowerCase() === 'bold') {
                     fontWeight = 700;
                  }else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'ultrabold') {
                     fontWeight = 800;
                  }else if (fontWeight.toLowerCase() === 'black' || fontWeight.toLowerCase() === 'heavy') {
                     fontWeight = 900;
                  } else {
                     fontWeight = 400;
                  }
                  fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../assets/fonts/${fontFileName}.woff2") format("woff2"), url("../assets/fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;}\r\n`, cb);
                  newFileOnly = fontFileName;
               }
            }
         } else {
            // Если файл есть, выводится сообщение
            console.log("Файл scss/fonts.scss уже существует")
         }
      }
   });

   return app.gulp.src(`${app.path.srcFolder}`);
   function cb() { }
}