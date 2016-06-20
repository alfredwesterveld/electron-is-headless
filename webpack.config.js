const path = require("path" )

module.exports = {
    //entry: path.join(__dirname, "entry.ts"),
    entry: "./entry.ts",
    target: "electron",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts?$/, loader: "ts-loader", exclude: /node_modules/ }
        ]
    }
};
