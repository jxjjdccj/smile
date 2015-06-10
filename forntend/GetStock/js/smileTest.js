$(document).ready(function() {
    var option = {
        "buyin_sz000930": 18.98,
        "num_sz000930": 600,
        "codepre": ["sz", "sh"],
        "minline": "http://image.sinajs.cn/newchart/min/n/${codepre}${minline}.gif",
        "dailyline": "http://image.sinajs.cn/newchart/daily/n/${codepre}${dailyline}.gif",
        "weeklyline": "http://image.sinajs.cn/newchart/weekly/n/${codepre}${weeklyline}.gif",
        "monthlyline": "http://image.sinajs.cn/newchart/monthly/${codepre}${monthlyline}.gif"
    }

    var list = $.smileGetUrlParam("list");
    list = list || 'sz000930,sz002065,sc601989,sc600187';

    Cme.loader.load({
        url: [
            "http://hq.sinajs.cn/list=" + list
        ]
    }, function() {
        var ar = list.split(',');
        var arr, html, $stockinfo = $('#stockinfo');
        var html = '<table id="table" class="pure-table pure-table-bordered width_100">\
                                <thead>\
                                    <tr>\
                                        <th>股票名称/代码</th>\
                                        <th>当前价格</th>\
                                        <th>今日开盘价</th>\
                                        <th>昨日收盘价</th>\
                                        <th>今日最高价</th>\
                                        <th>今日最低价</th>\
                                        <th>买一/卖一/成交的股票数/成交金额</th>\
                                        <th>买入价</th>\
                                        <th>盈利</th>\
                                    </tr>\
                                </thead>\
                                <tbody>\
                                </tbody>\
                            </table>';
        $stockinfo.html(html);

        var minline, dailyline, weeklyline, monthlyline;
        for (var i = ar.length - 1; i >= 0; i--) {
            arr = eval("hq_str_" + ar[i]).split(',');
            if (arr.length <= 1) {
                continue;
            }

            minline = option.minline.replace('${codepre}${minline}', ar[i]);
            dailyline = option.dailyline.replace('${codepre}${dailyline}', ar[i]);
            weeklyline = option.weeklyline.replace('${codepre}${weeklyline}', ar[i]);
            monthlyline = option.monthlyline.replace('${codepre}${monthlyline}', ar[i]);

            $stockinfo.find('tbody').append('<tr>\
                                        <td>' + arr[0] + '&nbsp;<a class="min" href="' + minline + '">时</a>&nbsp;<a class="dialy" href="' + dailyline + '">日</a>&nbsp;<a class="weekly" href="' + weeklyline + '">周</a>&nbsp;<a class="monthly" href="' + monthlyline + '">月</a></td>\
                                        <td>' + arr[3] + '</td>\
                                        <td>' + arr[1] + '</td>\
                                        <td>' + arr[2] + '</td>\
                                        <td>' + arr[4] + '</td>\
                                        <td>' + arr[5] + '</td>\
                                        <td>' + arr[6] + '/' + arr[7] + '/' + arr[8] / 100 + '百股/' + arr[9] / 10000 + '万元</td>\
                                        <td>' + option['buyin_sz000930'] + '</td>\
                                        <td>' + (arr[3] - option['buyin_sz000930']) * option['num_sz000930'] + '</td>\
                                    </tr>')
        };
        /*移入鼠标加载图片*/
        $stockinfo.off("mouseover").on('mouseover', 'a', function(event) {
            event.preventDefault();
            $('.img').attr({
                src: $(this).attr('href')
            });
        });;
    })

});
