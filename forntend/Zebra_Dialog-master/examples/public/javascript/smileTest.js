$(document).ready(function() {

    $('#example1').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery');
    });

    $('#example2_1').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong> has no dependencies other than <em>jQuery 1.5.2+</em> and works in all major' +
            ' browsers like<br>- Firefox<br>- Opera<br>- Safari<br>- Chrome<br>- Internet Explorer 6+', {
            'type':     'error',
            'title':    'Error'
        });
    });

    $('#example2_2').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong> is meant to replace JavaScript\'s <em>alert</em> and <em>confirmation</em>' +
            ' dialog boxes. <br><br> Can also be used as a notification widget - when configured to show no buttons and to close' +
            ' automatically - for updates or errors, without distracting users from their browser experience by displaying obtrusive alerts.', {
            'type':     'warning',
            'title':    'Warning'
        });
    });

    $('#example2_3').bind('click', function(e) {
        e.preventDefault();
        // $.smileConfirmDialog().done(function(val){
        //     alert(val.checkRadio);
        //     $.smileGetJSON("http://127.0.0.1:8088/service/showmyoperate.json?cache=1432639300206",{},function(json){
        //         alert(json);
        //     });
        // });
        // 
        var html='<div class="WeiWindows">\
                <div class="WeiTop"></div>\
                <div class="WeiBody">\
                  <textarea rows="4" cols="80" name="priMsg" id="priMsg"></textarea>\
                </div>\
                <div class="WeiBottom">\
                  <div class="WeiBottom_Upgrade">\
                    <p> 发送给：\
                        <input type="text" value="融e投官方客服" id="nickName" name="nickName">\
                    </p>\
                  </div>\
                </div>\
                <div class="clear"></div>\
              </div>';
        $.smileDialog(html, {
                'type': 'none',
                'title': '提示',
                'buttons':  [
                    {caption: '发送', callback: function() { alert('"Yes" was clicked');return false;}}
                ]
         });
    });

    $('#example2_4').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong> dialog boxes can be positioned anywhere on the screen - not just in the middle!' +
            '<br><br>By default, dialog boxes can be closed by pressing the ESC key or by clicking anywhere on the overlay.', {
            'type':     'information',
            'title':    'Information'
        });
    });

    $('#example2_5').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong> is a small (6KB minified), compact (one JS file, no dependencies other than jQuery 1.5.2+)' +
            ' and highly configurable dialog box plugin for jQuery meant to replace JavaScript\'s <em>alert</em> and <em>confirmation</em> dialog boxes.', {
            'type':     'confirmation',
            'title':    'Confirmation'
        });
    });

    $('#example3').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery', {
            'type':     'question',
            'title':    'Custom buttons',
            'buttons':  ['Yes', 'No', 'Help'],
            'onClose':  function(caption) {
                alert((caption != '' ? '"' + caption + '"' : 'nothing') + ' was clicked');
            }
        });
    });

    $('#example31').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery', {
            'type':     'question',
            'title':    'Custom buttons',
            'buttons':  [
                            {caption: 'Yes', callback: function() { alert('"Yes" was clicked')}},
                            {caption: 'No', callback: function() { alert('"No" was clicked')}},
                            {caption: 'Cancel', callback: function() { alert('"Cancel" was clicked')}}
                        ]
        });
    });

    $('#example4').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>smileDialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery', {
            'title':    'Custom positioning',
            'position': ['right - 20', 'top + 20']
        });
    });

    $('#example5').bind('click', function(e) {
        e.preventDefault();
        new $.smileDialog('<strong>smileDialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery', {
            'buttons':  false,
            'modal': false,
            'position': ['right - 20', 'top + 20'],
            'auto_close': 2000
        });
    });

    $('#example6').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>Some dummy content:</strong><br><br>', {
            source: {'ajax': 'ajax.html'},
            width: 600,
            title:  'External content loaded via AJAX'
        });
    });

    $('#example61').bind('click', function(e) {
        e.preventDefault();
        $.smileDialog('<strong>A Wikipedia page</strong><br><br>', {
            source: {'iframe': {
                'src':  'http://en.m.wikipedia.org/wiki/Dialog_box',
                'height': 500
            }},
            width: 800,
            title:  'External content loaded in an iFrame'
        });
    });

    $('#example7').bind('click', function(e) {
        e.preventDefault();
        new $.smileDialog('Buy me a coffee if you like this plugin!', {
            'custom_class': 'myclass',
            'title': 'Customizing the appearance'
        });
    });

});
