/*
 * 扩展Jquery方法 
 */
;(function(w){
    var loader = function(){
        var dc = document;
        function createScript(url, callback){
            var urls = url,
                scripts = [],
                completed = 0;
            for( var i = 0, len = urls.length; i < len; i++ ){
                scripts[i] = dc.createElement('script');
                scripts[i].src = urls[i];
                dc.getElementsByTagName('head')[0].appendChild(scripts[i]);
                if( scripts[i].readyState ){ //ie
                    scripts[i].onreadystatechange = function(){
                        if( this.readyState == 'complete' || this.readyState == 'loaded' ){
                            this.onreadystatechange = null; //确保事件不被处理2次
                            completed++;
                            completed >= urls.length ? callback() : '';
                        }
                    }
                }else{ //not ie
                    scripts[i].onload = function(){
                        completed++;
                        completed >= urls.length ? callback() : '';
                    }                            
                }
            }
        }
        function createLink(url, callback){
            var urls = url,
                links = [];
            for( var i = 0, len = urls.length; i < len; i++ ){
                links[i] = dc.createElement('link');
                links[i].rel = 'stylesheet';
                links[i].href = urls[i];
                dc.getElementsByTagName('head')[0].appendChild(links[i]);    
            }
            callback();
        }
        return {
            load: function(option, callback){
                var _type = option.type || 'js',
                    _url = option.url,
                    _callback = callback || function(){};
                switch( _type ){
                    case 'js':
                    case 'javascript':
                        createScript(_url, _callback);
                        break;
                    case 'css':
                        createLink(_url, _callback);
                        break;
                }
                return this;
            }
        }
    }();
    w.Cme ? '' : w.Cme = {};
    w.Cme.loader = loader;    
})(window);
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
                        args.checkRadio = $('#nocomplete-modal' + idNum).find('.radio:checked').val();;
                        deferred.resolve(args);
                    }
                    deferred.reject();
                }
            });
            return deferred.promise();
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

        },
        smileGetUrlParam: function(param) {
            var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    })
}(window.jQuery);
