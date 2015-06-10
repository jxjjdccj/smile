/*
 * 扩展Jquery方法 
 */

! function($) {
    $.extend({
        smileConfirmDialog: function() {
            var deferred = jQuery.Deferred();

            var idNum = Math.floor(Math.random() * 9999999);
            var html = '<div class="modal" id="nocomplete-modal' + idNum + '">\
                        <h1>股票卖出</h1>\
                        <div class="MainText" style=" height:130px;text-align:left">\
                        <p><input name="msgtype" class="radio" type="radio" value="1" checked>只卖出可卖部分。</p>\
                        <p><input name="msgtype" class="radio" type="radio" value="2" >将未成交委托撤单并卖出所有股票。</p>\
                        </div>\
                        <div class="clearfix"></div>\
                    </div>';

            $.smileDialog(html, {
                'type': 'none',
                'title': '提示',
                'buttons': ['确认', '取消'],
                'onClose': function(caption, e) {
                    if (caption === '确认') {
                        var args = {};
                        args.checkRadio = $('#nocomplete-modal' + idNum).find('.radio:checked').val();
                        deferred.resolve(args);
                    }
                    deferred.reject();
                }
            });
            return deferred.promise();
        },
        smileModal:function(){
            


        },
        smileGetJSON: function(url, data, doe, fail, always) {
            $.ajax({
                    url: url + "&callback=?",
                    dataType: 'jsonp',
                    data: data,
                })
                .done(function(json) {
                    doe(json);
                })
                .fail(function() {
                    fail && fail();
                })
                .always(function() {
                    always && always();
                });

        }
    })
}(window.jQuery);
