// Node.js path module is used for handling and transforming file paths
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  // debugging tool to tell you which unbundled file the error is in, it source maps the js

  // Google Chrome can parse the source map automatically and make it
  // appear as though you're running unminified and uncombined files.
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    // requiring a file without an extension will check for a file with no extension, then traverse the list before giving up
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    // if something fails, it tells us why
    reasons: true,
    chunks: true
  },
  // all of the transforms we want webpack to apply. Traverses the list looking for tests which pass then applying the loader
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        // TODO: This is going to compile the js in to the bundle. Look in to splitting the JS and CSS out to seperate files.
        // we can pass multiple loaders
        use: [
          // loader with no configuration
          'style-loader',
          // loader with configuration
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
