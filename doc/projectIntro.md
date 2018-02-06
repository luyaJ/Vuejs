# 项目

## 技术栈

* (Vue)[https://cn.vuejs.org/]
* vue-router
* (vue-resource)[https://github.com/pagekit/vue-resource]
* (json-server)[https://github.com/typicode/json-server]

## 1.components/layout.vue 首页面

由三部分组成：
* header部分: 登录注册 
* content部分: 使用`router-view`,需要安装`vue-router`
* footer

## 常见问题

> Elements in iteration expect to have 'v-bind:key' directives
 !(Require v-bind:key with v-for directives (require-v-for-key))[https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md]

 >Expected method shorthand

 ```bash
 # 在export default中写成这样会报以上的错误
 created: function () {}
 # 下面是正确写法
 created() { 
    //
 },123
 ```