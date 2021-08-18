//引入一个包
const path = require('path');

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },

    module: {
        // 指定要加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    }
}
