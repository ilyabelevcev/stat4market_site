import * as flsFunctins from "./modules/functions.js"
import $ from "jquery"

flsFunctins.isWebp();

$(document).ready(function() {
   $('.burger-menu').click(function() {
      $('.burger-menu, .burger-nav').toggleClass('open-menu')
      $('body').toggleClass('fixed-page')
   });
});