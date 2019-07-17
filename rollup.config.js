import json from "rollup-plugin-json";
import scss from "rollup-plugin-scss";

module.exports = {
    input: 'src/javascript/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
      name: 'main'
    },
    plugins: [ 
      json(), 
      scss() 
    ]
  };