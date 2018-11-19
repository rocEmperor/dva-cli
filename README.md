## 中冶智慧人居（2018.11.15）

### 运行
-  git clone "项目地址"
-  npm install
-  npm run start  
-  npm run build

### 代码管理（**************特别注意*****************）
-  自行代码检测.eslintrc.json(atom,vscode等IDE有检测插件)
-  在commit之前会进行代码强制检测，检测不通过不允许提交，进行修改修改好了再次add
-  dev为测试分支，master为线上分支，开发时创建自己的分支


### account
username: test
password: 123456


### 项目内域名与接口地址转换
详见：`src/utils/util.js`


### ftp
type|name|password|ip
---|---|---|---



### domain
* dev `localhost:1234` zhujiayi1 123456


### 接口文档
Rap: `http://192.168.1.235:8077/org/group.action?plid=7`


### 项目架构


### 规范
#### 1.文件结构代码规范
* 目录名小写开头，文件名大写开头，namespace带上Model后缀并且大写开头，一个modal文件对应一个route文件，一个大菜单对应一个service文件。
* 公共css放在`src/index.css`,加上global属性
`:global(.ant-breadcrumb ){
  	line-height: 4;
}`
* 统一缩进2格

#### 2.交互规范
* 所有新增编辑详情都跳新页面
* 搜索重置成对出现，列表上方模块只放搜索重置按钮，新增，导入导出等按钮都在列表模块顶部，距离列表10像素
* 所有图片带放大功能（除去列表）
* 所有列表以及表单提交都加上loading效果，可防治重复提交以及优化交互
* 面包屑如果是三级，中间一级加上链接
* 列表可操作里的样式不使用button，采用a标签，相互之前距离10px(mr1)
* 列表的搜索4*6布局
* 多次出现的验证进行统一`utils/util`

#### 3.组件封装
* 项目布局MainLayout
* 菜单权限Menus
* 图片上传Image
* 登录Login
* 导入ExImport
* 选择房屋Community
* 富文本编辑器ueditor






  

