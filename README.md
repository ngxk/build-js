# Constructor SPA

## devDevelopment
```
npm install --save-dev \
	webpack \
	webpack-cli \
	webpack-dev-server \
	html-webpack-plugin \
	css-loader \
	style-loader

npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader
```

## Commands
```
npx webpack
```
```
npx webpack s
```

## Scripts
```
// Production
"build": "npm run clean && webpack --config ./webpack/webpack.config.js --env env=prod",

// Development
"start": "webpack serve --config ./webpack/webpack.config.js --env env=dev --open",

//
"clean": "rimraf dist"
```