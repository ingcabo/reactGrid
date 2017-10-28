/**
 * \the_react\webpack.config.js 1.0.3
 * 1.0.1:   explicaciones extendidas sacadas del video https://youtu.be/2M5L_uz6GO0
 * 1.0.2:   cambios para que funcione la app https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=1031
 *      entry de "./app/dist/index.js" a "./app/src/index.js"
 *      output.path de __dirname+"/app/js" a  __dirname+"/app/dist/js"
 */
var debug = process.env.NODE_ENV !== "production"
var webpack = require("webpack")
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  //punto de entrada de la app.
  entry: "./app/src/index.js", //el index a transpilar

  //con el objeto module y el array de loaders se indica que trasnformaciones se desea que haga
  //https://youtu.be/2M5L_uz6GO0?t=296 (explicacion module)
  module:{
      loaders:[
          {
              test:/\.jsx?$/,//indica que ficheros debe tener en cuenta
              exclude:/(node_modules|bower_components)/,
              loader: 'babel-loader',
              query:{
                  presets:["react","es2015","stage-0"],
                  plugins:["react-html-attrs","transform-class-properties","transform-decorators-legacy"],
              }
          },

          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug'
            ]
          },

          {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
        }

      ]
  },
  output: {
    path: __dirname + "/app/dist/js/",//carpeta donde se guardara lo compilado
    filename: "index.min.js",//el js minificado final a pasar aproduccion
    public: "/build/", //directorio publico desde donde se podra vincular https://youtu.be/2M5L_uz6GO0?t=227
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  //resolve: indica los archivos que webpack debe tener en cuenta
/*  resolve:{
      extensions: ["",".js"]//indica que haga caso a los archivos .js
  },*/

  //como se ha configurado el paquete webpack-dev-server podemos configurar el servidor mediante
  //este objeto
  devServer:{

     historyApiFallback: true
    //  host: "0.0.0.0",
    //  port: 8080,
    //  inline: true //indica que nos cree un servidor de desarrollo basado en node y express??
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
}//module.exports
