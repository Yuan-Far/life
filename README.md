### Xiyoumobile desktop

**代码提交步骤**
**每一个文件做了更改都必须按照以下步骤来**

> 1. `git add .`
> 2. `git cz`
> 3. 根据提示输入`commit`信息

1. 安装依赖包

> 使用`npm i` 或者 `yarn install`
>> 因为国内安装 `electron` 较慢，容易出现超时问题，建议添加国内镜像源，以淘宝源为例，

```
npm config edit
// 然后添加electron国内镜像源
electron_mirror = "http://npm.taobao.org/mirrors/electron/"
```
>> 或者在淘宝源上面下载文件包，并解压到`npm`全局目录下，安装`electron-prebuild`,可以直接运行。
2. 开发环境

> 启动主线程开发 `npm run dev`

> 启动渲染线程开发 `npm run start`

**每个组件都必须通过测试, 且保证覆盖率>=90%**

3. 启动 `jest` 单元测试

> 使用 `npm run test`

4. 生成测试报告

> 使用 `npm run test:coverage`

4. 打包程序

> 待定

### 文件目录树

`tree -I 'node_modules|coverage|build' -C -L 3`

```
.
├── README.md
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   ├── fileTransform.js
│   │   └── typescriptTransform.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── setupTests.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── doc.md
├── nginx.conf
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── fonts
│   │   ├── icon.svg
│   │   ├── icon.ttf
│   │   └── icon.woff
│   ├── icon.min.css
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src                                 // 组件
│   ├── App.tsx
│   ├── common                          // 通用模块，各个组件通过`data.ts`引入
│   ├── components                      // 组件模块，路由在`menulist`,组件调用在`main`
│   ├── index.tsx
│   ├── main.js
│   └── registerServiceWorker.ts
├── test                                // 测试
│   └── __test__                        
│       ├── __snapshots__               // 快照
├── tsconfig.json
├── tsconfig.test.json
├── tslint.json
└── yarn.lock
```
