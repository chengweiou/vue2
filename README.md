# vue2

1.分支
  master: 成品
  dev: 某一模块完成，不报错
  o: 个人开发分支
  路线: o => dev => master
  
2.component:
  image/centerImage: 通过:src属性，把图片不拉伸居中显示, 如果src下没有图片，将显示x
  loading: 默认loading图，小球跳跃

3.filter:
  date: 自定义日期输入与输出格式
    e.g.: date | ({from: 'yyyymmdd', to: 'MMM dd, yy'}) 或者js, date(date, {from, to})
   number: 输出格式 100,000
   phoen: 输出格式 (100) 200 - 3000
  
 4.fn/util: 一些工具类
  wait: settimeout的语法糖, 不再需要嵌套callback
    e.g.: await this.$wait(1000)
    
5.sdk
  config/site: 请求的服务器地址，可在这里设置各种环境地址
  util/data: 后端搭建前，自定义测试成功数据，目前配合fetchutil切换访问服务器还是走测试数据。格式键值对 'METHOD path/path': {data}
  util/exceptionUtil: 默认会把请求失败转为code: -1，如果服务端会返回其他特殊status，可以在这里添加转化
  util/paramUtil: 提供参数转请求需要的urlencoded与formdata，懒人专用
  util/storage: localstorage 简单封装，方便与如果有需要替换localstorage的时候
  
6.store
  index: 添加新的module，同时需要在这里引入一下
  plugin: 连接store与本地存储
  
7.view
  refresh: 需要刷新页面的时候访问这个地址
