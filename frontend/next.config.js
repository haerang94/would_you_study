/* eslint-disable @typescript-eslint/no-var-requires */

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");


// next.config.js
const withImages = require('next-images')


module.exports = withImages(
{
 webpack(config, options) {
   const { dev, isServer } = options;

   // Do not run type checking twice:
   if (dev && isServer) {
     config.plugins.push(new ForkTsCheckerWebpackPlugin());
     config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' 
      }
    )
   }

   return config;
 }});