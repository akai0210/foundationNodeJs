# 基金爬虫

### 安装依赖
npm install cheerio(主要是解析下载的网页可以像jquery一样骚操作，必备，使用也很简单可以上npm上查看文档)。
npm install iconv-lite(主要解决下载的资源乱码问题)。正则表达式（如果是接口数据的话有些关键参数是在script中，需要通过正则提取出来）
npm install xlsx(主要解决把数据写入excel表中）