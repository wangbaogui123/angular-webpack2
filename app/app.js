var angular = require('angular');// 引入angular

var urlRouterProvider = require('angular-ui-router');

var uiLoad =  require('angular-ui-load');

var $jq = require('jquery');

var animate = require('angular-animate');

var ngModule = angular.module('app',['ui.router','ui.load','ngAnimate']); // 创建app

    require('./factory.js')(ngModule,$jq);// 公共方法封装

	require('./route.js')(ngModule);// 引入路由文件

    require('./directives.js')(ngModule,$jq);// 组件

	require('./controller.js')(ngModule);// 控制器

	require('./css/style.css');// 引入样式文件





	