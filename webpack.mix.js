const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// 左を右に集約
mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);
