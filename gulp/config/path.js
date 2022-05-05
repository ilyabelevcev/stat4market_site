import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
   build: {
      js: `${buildFolder}/assets/js/`,
      images: `${buildFolder}/assets/img/`,
      css: `${buildFolder}/assets/css/`,
      html: `${buildFolder}/`,
      fonts: `${buildFolder}/assets/fonts/`,
      files: `${buildFolder}/files/`,
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,xml,webmanifest}`,
      svg: `${srcFolder}/img/**/*.svg`,
      sass: `${srcFolder}/sass/style.sass`,
      html: `${srcFolder}/*.pug`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      sass: `${srcFolder}/sass/**/*.sass`,
      html: `${srcFolder}/**/*.pug`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `test`
};