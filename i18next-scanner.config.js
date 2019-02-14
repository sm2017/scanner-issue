const fs = require('fs');

module.exports = {
  options: {
    debug: true,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: [
        't',
      ],
      extensions: [
        '.js',
        '.jsx',
      ],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: [
        '.js',
        '.jsx',
      ],
      fallbackKey: function(ns, value) {
        return value;
      },
    },
    lngs: [
      'en-US',
      'en-GB',
    ],
    ns: [
      'translation',
    ],
    defaultLng: 'en-US',
    defaultNs: 'translation',
    defaultValue(lng, ns, key) {
      return key;
    },
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: function customTransform(file, enc, done) {
    'use strict';
    const parser = this.parser;

    const options = {
      presets: ['@babel/preset-flow'],
      plugins: ['@babel/plugin-syntax-jsx'],
    };
    const content = fs.readFileSync(file.path, enc);

    const code = require('@babel/core').transform(content, options);
    parser.parseTransFromString(code.code);
    done();
  },
};
