const XLSX = require("xlsx");
const Cheerio = require("cheerio");
const Iconv = require("iconv-lite");
const Http = require("http");
const Request = require("request");

// 如果是https协议的网站，这里改用https就可以了
// 请求头最好设置为user-agent，不然有的网站爬不到，做了限制爬虫爬取网页
const options = {
   url: 'http://fund.eastmoney.com',//http://fund.eastmoney.com/data/fundranking.html#tall;c0;r;szzf;pn50;ddesc;qsd20190224;qed20200224;qdii;zq;gg;gzbd;gzfs;bbzt;sfbb
   header: {
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.'
   }
}

Http.get(options, (res)=> {
    console.log("资源res=============",res);
    const chunks = [];
    res.on('data', function(chunk) {
      chunks.push(chunk);
    });
    res.on('end',()=> {
      //查看网页源代码编码方式，设置对应的编码格式
      const html = Iconv.decode(Buffer.concat(chunks), 'gb2312');
      //html就是下载到的资源了，
      console.log(html);     
      
      const $ = Cheerio.load(html);
      //接下来就是对数据的处理了，jquery怎样操作，你就怎么操作
      
    })})