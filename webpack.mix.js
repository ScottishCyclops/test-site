const mix = require("laravel-mix")

mix.js("src/app.js", "public/js")
   .sass("src/app.scss", "public/css")
   .setPublicPath("public")
