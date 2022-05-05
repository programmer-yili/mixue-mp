# 蜜雪冰城小程序云开发

程序猿依力实战直播之蜜雪冰城小程序云开发实战代码仓库

## 前言

本项目为程序猿依力实战直播间第3个直播项目，每周六至周四晚9点至11点在“程序猿依力”视频号和B站直播间同步直播。

B站直播间地址：http://live.bilibili.com/23728616

视频号：

<img src="/Users/ilham/WeChatProjects/miniprogram-1/assets/README/IMG_1851.JPG" alt="IMG_1851" style="width:33%; float: left" />



## 技术栈

微信小程序原生开发 + 云CMS



## 功能划分

![image-20220505140655502](/Users/ilham/WeChatProjects/miniprogram-1/assets/README/image-20220505140655502.png)

## 项目看板

> 项目正在迭代中，欢迎加入看板关注项目进度！
>
> https://www.gogoscrum.com/invitations/07FtQtNRMe0Y



## 项目初始化

### 拉取代码

```shell
git clone git@github.com:programmer-yili/mixue-mp.git
# 国内镜像加速节点：git@gitee.com:programmer-yili/mixue-mp.git
```



### npm依赖安装

```shell
# 注意package.json文件在miniprogram目录下
cd mixue-mp/miniprogram
npm install
```



### 微信开发者工具打开项目

![image-20220505134713146](/Users/ilham/WeChatProjects/miniprogram-1/assets/image-20220505134713146.png)



### 选择云函数环境

![image-20220505134855931](/Users/ilham/WeChatProjects/miniprogram-1/assets/README/image-20220505134855931.png)



### 微信开发者工具构建npm

![image-20220505135150719](/Users/ilham/WeChatProjects/miniprogram-1/assets/README/image-20220505135150719.png)



### 云开发CMS初始化

![image-20220505135308566](/Users/ilham/WeChatProjects/miniprogram-1/assets/README/image-20220505135308566.png)

### 导入模型

云开发CMS初始化完毕后创建新项目，进入新项目后，导入data目录下的scheme.json

![image-20220505135647091](/Users/ilham/WeChatProjects/miniprogram-1/assets/README/image-20220505135647091.png)



### 导入数据（可选）

在data文件夹内内容集合json数据可以导入对应的内容集合内。对应的文件名如下：

| 内容集合   | 文件名         |
| ---------- | -------------- |
| 轮播图     | mx_swiper      |
| 门店       | store          |
| 客户       | user           |
| 自定义页面 | page           |
| 商品       | goods          |
| 规格分类   | specs_category |
| 规格       | specs          |
| 商品分类   | goods_category |



**项目任何问题欢迎提issues**





