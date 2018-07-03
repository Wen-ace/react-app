### 使用create-react-app 脚手架步骤及注意事项：
- 安装
    `npm install create-react-app -g`
- 创建工程
    `create-react-app my-app`
- 添加配置（以scss为例）
  1. `npm run eject` // 把配置文件抽离出来
  2. 找到webpack.config.dev.js 和 webpack.config.prod.js
     在 module 下的 rules 中添加 scss loader规则（是两个文件都要！！！）。
  3. 打包路径问题。
     找到config 下的paths.js , 大概37行修改如下：
     `const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');` 改为
     `const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : './');`
