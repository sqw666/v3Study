/*
 * @Description: 
 * @Author: sunqiwei
 * @Date: 2023-11-17 23:16:14
 * @LastEditors: sunqiwei
 * @LastEditTime: 2023-11-18 01:15:34
 */
// 引入的不再是vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// 把外壳组件APP直接传给这个工厂函数了，先创建应用实例对象createApp(App)，再挂载到选择器上。
createApp(App).mount('#app') 
