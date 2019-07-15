import json from "rollup-plugin-json";

module.exports = {
    input: 'src/javascript/main.js',
    output: {
      file: 'dist/javascript/bundle.js',
      format: 'iife',
      name: 'main'
    },
    plugins: [ json() ]
  };