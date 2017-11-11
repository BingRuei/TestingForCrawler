var request = require("request");
var cheerio = require("cheerio");

// var url = "https://tw.stock.yahoo.com/q/bc?s=0050";
// var url = "https://www.cnyes.com/twstock/ps_historyprice/0050.htm";
var url = "http://rate.bot.com.tw/xrt?Lang=zh-TW";

var name = [], buying = [], sale = [];

// 取得網頁資料
request(url, function (error, response, body) {
  if (!error) {

    // 用 cheerio 解析 html 資料, 把要到的資料放進 cheerio
    var $ = cheerio.load(body);

    // let weathers = []
    // $('tbody tr').each(function(i, elem) {
    //   weathers.push($(this).text().split('\n'))
    // })

    $('div[class="visible-phone print_hide"]').each(function(i, elem) {
      name[i] = $(this).text().trim().split('\n');
    });
    $('td[data-table="本行即期買入"]').each(function(i, elem) {
      buying[i] = $(this).text().split('\n');
    });
    $('td[data-table="本行即期賣出"]').each(function(i, elem) {
      sale[i] = $(this).text().trim().split('\n');
    });
    // name.join(', ');
    // buying.join(', ');
    // sale.join(', ');

    // 篩選有興趣的資料
    // var name = $('div[class="visible-phone print_hide"]').text();
//     <div class="visible-phone print_hide">
//     美金 (USD)
// </div>
    // var rate_buying = $('td[data-table="本行即期買入"]').text();
    // var rate_sale = $('td[data-table="本行即期賣出"]').text();
{/* <td data-table="本行即期買入" class="rate-content-sight text-right print_hide hidden-phone" data-hide="phone">30.12</td> */}

    // var temperature = $(".now&.Fz(8em)--sm&.Fz(10em)&.Lh(0.9em)&.Fw(100)&.My(2px)&.Trsdu(.3s) .Va(t)").html;
    // var humidity = $("[data-variable='humidity'] .wx-value").html();
    // var mrraybox = $("title").html();
    // var subtitle = $('g[transform="translate(428,20)"]').text();
    // var subtitle = $('div[class="highcharts-container"]').text();
    // var subtitle = $('g[transform="translate(428,20)"]').html();
    // var subtitle = $('td[class="rt r"]').text();
    // <td class="rt r">0.53%</td>
    // var subtitle = $().text();
    // <g style="" font-size="14px" zIndex="8" transform="translate(428,20)">
    //      <text x="3" zIndex="1" style="color:#DF3F3F;fill:#DF3F3F;" y="15">85.00</text>
    // </g>
    // 語法都跟 jquery 一樣
    // 找到 class = "FcstBoxTable01"
    // 再找標籤 <tbody>
    // 取得裡面的每一個 <tr>
    // 取文字部分分行之後放進 weather


    // 輸出
    // console.log("氣溫：攝氏 " + temperature + " 度");
    // console.log("濕度：" + humidity + "%");
    // console.log(mrraybox);
    // console.log(subtitle);

    // console.log(weathers);
    // console.log(name);
    // console.log(rate_buying);
    // console.log(rate_sale);
    console.log("幣別, 即期買入, 即期賣出");
    for(var i=0;i<name.length;i++){
      console.log(name[i]+", "+buying[i]+", "+sale[i]);
    }
  } else {
    console.log("擷取錯誤：" + error);
  }
});