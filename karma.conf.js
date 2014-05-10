module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec/lib/jasmine-2.0.0/jasmine.js',
      'spec/lib/jasmine-2.0.0/jasmine-html.js',
      'spec/lib/jasmine-2.0.0/boot.js',
      'spec/lib/mocking.js',
      'spec/lib/custom_matcher.js',
      'spec/spec_helper.js',
      "lib/jquery-2.0.1.min.js",
      "lib/jquery.extend.js",
      "lib/utility.js",
      "lib/dom.js",
      "js/options.js",
      "js/key/identifiers.js",
      "js/key/sequence.js",
      "js/key/map.js",
      "js/viewport.js",
      "js/box/select.js",
      "js/box/command.js",
      "js/box/help.js",
      "js/hint/element.js",
      "js/hint/element_collection.js",
      "js/processor/noop.js",
      "js/processor/visual.js",
      "js/processor/command.js",
      "js/processor/hint.js",
      "js/processor/insert.js",
      "js/processor/help.js",
      "js/command.js",
      "js/mode.js",
      "js/main.js",
      'spec/**/*.js'
    ],
    exclude: [ ],
    preprocessors: {
     'js/**/*.js': [ 'coverage' ]
    },
    reporters: [
      'progress',
      'coverage'
    ],
    coverageReporter: {
      type: 'html',
      dir : 'coverage/'
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};