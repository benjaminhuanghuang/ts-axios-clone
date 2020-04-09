## Course Information
- https://coding.imooc.com/class/330.html
- https://github.com/YanXinChen1990/imooc-ts-axios
- https://github.com/leer0911/myXHR/blob/master/doc/README.md
- [黄奕老师-ts重构axios文档](https://github.com/Suremotoo/ts-axios-doc)
- [TypeScript 重构 Axios 经验分享](https://segmentfault.com/a/1190000017123365?utm_source=tag-newest)

## Content
第1章 课程介绍【悄悄告诉你，一定要看，有福利】
介绍本课程的主要内容，通过本次课程可以学到的知识点，学习方法介绍。

第2章 初识 Typescript【初次体验】
教会同学们安装 Typescript 编译器，以及通过编写第一个 TypeScript 程序认识 TypeScript。

第3章 Typescript 类型系统【必备基础，牢固掌握】
主讲 TypeScript 的一些重要的基础概念，并配合一些具体的代码示例辅助说明，帮助同学们了解 TypeScript 的常见用法，为之后的实战打下基础

第4章 ts-axios 项目构建【工欲善其事必先利其器】
分析 axios 项目的重构需求，使用 typescrpit-library-starter 脚手架初始化项目，并编写基础请求的代码，搭建整个 demo 的架构方案。

第5章 ts-axios 基础功能实现【核心流程】
实现 axios 的基础功能，包括对请求 url、data、header 以及响应 data、header 的处理。

第6章 ts-axios 异常情况处理【不可忽视的边界条件】
处理 axios 请求的一些异常情况，包括网络错误、请求超时，构造一个信息增强错误处理类。

第7章 ts-axios 接口扩展【工厂模式的合理运用，设计思想的转变】
把 axios 从普通函数实现到通过工厂模式类的设计转变，并扩展更多调用接口，把 axios 变成了一个 混合对象，以及让响应数据支持泛型。

第8章 ts-axios 拦截器实现【巧妙运用 Promise 链式调用】
实现 axios 的拦截器功能，对整个实现做了详细的设计，最后实现拦截器管理类以及链式调用逻辑。

第9章 ts-axios 配置化实现【巧妙运用策略模式实现配置合并】
让 axios 支持一些默认配置，实现了配置的合并，根据不同的属性采用不同的合并策略，并且扩展了 axios.create 方法扩展默认配置，生成新的实例。

第10章 ts-axios 取消功能实现【巧妙运用 Promise 实现异步分离】
实现 axios 的取消功能，包括对取消接口的设计，CancelToken 类的设计与实现。

第11章 ts-axios 更多功能实现【锦上添花】
实现 axios 更多的功能，包括 XSRF 防御、上传、http 认证授权、withCredentials、自定义参数序列化、自定义合法状态码、自定义合法状态码等，百分百实现官方 axio 在浏览器端的功能。

第12章 ts-axios 单元测试【保障代码高质量】
先介绍单元测试，再讲解测试环境搭建，最后完整的实现整个 axios 库的单元测试，保证测试覆盖率达到 99%

第13章 ts-axios 部署发布【向社区分享你的项目】
讲解 ts-axios 库的部署和发布，使用 Rollup 编写部署构建脚本，使用 semantic-release 管理版本和发布。

第14章 课程总结【知识梳理，巩固加深】
本次课程的整体回顾，总结学习的内容。