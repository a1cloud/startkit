#前端项目

##UI暂时考虑

https://material.angularjs.org/latest/

##项目启动

```
git clone git@github.com:a1cloud/startkit.git 

cd startkit

npm i

gulp // 默认启动开发模式
gulp build --release //生成环境打包
```

##项目结构说明

```

app/
----- shared/   // 重用组件和公共组件
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
----- components/   // 模块化目录，每个目录是一个单独的angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.js
----- routes.js
assets/
----- img/      // 图片和图标
----- css/      // 所有的css less sass
----- js/       // 自己写的代码，非angular程序相关代码
----- libs/     // 第三方类库比如 jQuery, Moment, Underscore.
index.html

```


