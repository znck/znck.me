(function ($) {
    $.fn.znckFillView = function () {
        console.log('resizing text');
        this.each(fillView);

        function fillView() {
            $(this).css('min-height', $(window).height() + 'px');
            return false;
        }
    };
}(jQuery));

$(document).ready(function () {
    $('.fill-view').znckFillView();
    $(window).bind('resize', function () {
        $('.fill-view').znckFillView();
    });
    var $borders = $('._bb, ._bt, ._bl, ._br');
    //if ($borders.height() < 1) {
    //    $borders.css('border', 'none');
    //}
});

/**
 * @preserve  textfill
 */
;
(function ($) {
    /**
     * Resizes an inner element's font so that the inner element completely fills the outer element.
     * @param {Object} Options which are maxFontPixels (default=40), innerTag (default='span')
     * @return All outer elements processed
     */
    $.fn.textfill = function (options) {
        var defaults = {
            debug: false,
            maxFontPixels: 40,
            minFontPixels: 4,
            innerTag: 'span',
            widthOnly: false,
            success: null,          // callback when a resizing is done
            callback: null,         // callback when a resizing is done (deprecated, use success)
            fail: null,             // callback when a resizing is failed
            complete: null,         // callback when all is done
            explicitWidth: null,
            explicitHeight: null,
            changeLineHeight: false
        };
        var Opts = $.extend(defaults, options);

        function _debug() {
            if (!Opts.debug
                || typeof console == 'undefined'
                || typeof console.debug == 'undefined') {
                return;
            }

            console.debug.apply(console, arguments);
        }

        function _warn() {
            if (typeof console == 'undefined'
                || typeof console.warn == 'undefined') {
                return;
            }

            console.warn.apply(console, arguments);
        }

        function _debug_sizing(prefix, ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels) {
            function _m(v1, v2) {
                var marker = ' / ';
                if (v1 > v2) {
                    marker = ' > ';
                } else if (v1 == v2) {
                    marker = ' = ';
                }
                return marker;
            }

            _debug(
                prefix +
                    'font: ' + ourText.css('font-size') +
                    ', H: ' + ourText.height() + _m(ourText.height(), maxHeight) + maxHeight +
                    ', W: ' + ourText.width() + _m(ourText.width(), maxWidth) + maxWidth +
                    ', minFontPixels: ' + minFontPixels +
                    ', maxFontPixels: ' + maxFontPixels
            );
        }

        function _sizing(prefix, ourText, func, max, maxHeight, maxWidth, minFontPixels, maxFontPixels) {
            _debug_sizing(prefix + ': ', ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels);
            while (minFontPixels < maxFontPixels - 1) {
                var fontSize = Math.floor((minFontPixels + maxFontPixels) / 2)
                ourText.css('font-size', fontSize);
                if (func.call(ourText) <= max) {
                    minFontPixels = fontSize;
                    if (func.call(ourText) == max) {
                        break;
                    }
                } else {
                    maxFontPixels = fontSize;
                }
                _debug_sizing(prefix + ': ', ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels);
            }
            ourText.css('font-size', maxFontPixels);
            if (func.call(ourText) <= max) {
                minFontPixels = maxFontPixels;
                _debug_sizing(prefix + '* ', ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels);
            }
            return minFontPixels;
        }

        this.each(function () {
            var ourText = $(Opts.innerTag + ':visible:first', this);
            // Use explicit dimensions when specified
            var maxHeight = Opts.explicitHeight || $(this).height();
            var maxWidth = Opts.explicitWidth || $(this).width();
            var oldFontSize = ourText.css('font-size');
            var lineHeight = parseFloat(ourText.css('line-height')) / parseFloat(oldFontSize);
            var fontSize;

            _debug('Opts: ', Opts);
            _debug('Vars:' +
                ' maxHeight: ' + maxHeight +
                ', maxWidth: ' + maxWidth
            );

            var minFontPixels = Opts.minFontPixels;
            var maxFontPixels = Opts.maxFontPixels <= 0 ? maxHeight : Opts.maxFontPixels;
            var HfontSize = undefined;
            if (!Opts.widthOnly) {
                HfontSize = _sizing('H', ourText, $.fn.height, maxHeight, maxHeight, maxWidth, minFontPixels, maxFontPixels);
            }
            var WfontSize = _sizing('W', ourText, $.fn.width, maxWidth, maxHeight, maxWidth, minFontPixels, maxFontPixels);

            if (Opts.widthOnly) {
                ourText.css({
                    'font-size': WfontSize,
                    'white-space': 'nowrap'
                });
                if (Opts.changeLineHeight) {
                    ourText.parent().css('line-height', lineHeight * WfontSize + 'px');
                }
            } else {
                ourText.css('font-size', Math.min(HfontSize, WfontSize));
                if (Opts.changeLineHeight) {
                    ourText.parent().css('line-height', (lineHeight * Math.min(HfontSize, WfontSize)) + 'px');
                }
            }
            _debug('Final: ' + ourText.css('font-size'));

            if (ourText.width() > maxWidth
                || (ourText.height() > maxHeight && !Opts.widthOnly)
                ) {
                ourText.css('font-size', oldFontSize);
                if (Opts.fail) {
                    Opts.fail(this);
                }
            } else if (Opts.success) {
                Opts.success(this);
            } else if (Opts.callback) {
                _warn('callback is deprecated, use success, instead');
                // call callback on each result
                Opts.callback(this);
            }
        });

        // call complete when all is complete
        if (Opts.complete) Opts.complete(this);

        return this;
    };
})(window.jQuery);

$(document).ready(function () {
    $('.magic-text').textfill({ maxFontPixels: 64, changeLineHeight: true });
    $(window).bind('resize', function () {
        $('.magic-text').textfill({ maxFontPixels: 64, changeLineHeight: true });
    });
});

function responsiveMobileMenu() {
    $('.menu-bar').each(function () {
        var $width = 0;
        $(this).find('> ul').find('li').each(function () {
            $width += $(this).outerWidth();
        });

        $(this).attr('data-width', $width);

    });
}

function getMobileMenu() {
    $('.menu-bar').each(function () {
        var menutitle = $(this).attr("data-menu-title");
        if (menutitle == "") {
            menutitle = "Menu";
        }
        else if (menutitle == undefined) {
            menutitle = "Menu";
        }
        var $menulist = $(this).find('> ul').html();
        var $menucontrols = "<div class='controls'><div class='title'>" + menutitle + "</div><div class='button dropdown-toggle' data-toggle='dropdown'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
        $(this).prepend("<div class='toggled closed' data-toggle='dropdown'>" + $menucontrols + "<ul>" + $menulist + "</ul></div>");

    });
}

function adaptMenu() {
    $('.menu-bar').each(function () {
        var width = parseFloat($(this).attr('data-width'));
        if ($(this).parent().width() < width * 1.05) {
            $(this).find('> ul').hide();
            $(this).find('.toggled').show();
            $('#nav-bar').addClass('fix-top mobile');
            $('#nav-replace').addClass('nav-replace');
            window.mobile = true;
        }
        else {
            $(this).find('> ul').show();
            $(this).find('.toggled').hide();
            $('#nav-bar').removeClass('fix-top').removeClass('mobile');
            $('#nav-replace').removeClass('nav-replace');
            window.mobile = false;
        }
    });

}

$(function () {

    responsiveMobileMenu();
    getMobileMenu();
    adaptMenu();

    /* slide down mobile menu on click */

    $('.menu-bar').find('.toggled, .toggled.button').click(function () {
        if ($(this).is(".closed")) {
            $(this).find('ul').stop().show(300);
            $(this).removeClass("closed");
        }
        else {
            $(this).find('ul').stop().hide(300);
            $(this).addClass("closed");
        }

    });

});

/* 	hide mobile menu on resize */
$(window).resize(function () {
    adaptMenu();
});

$(document).ready(function(){
    $('a[rel=next]').each(function(){
        var alt = $(this).text();
        $(this).html('<i class="fa fa-chevron-right"></i>');
        $(this).attr('alt', alt);
    });

    $('a[rel=prev]').each(function(){
        var alt = $(this).text();
        $(this).html('<i class="fa fa-chevron-left"></i>');
        $(this).attr('alt', alt);
    });

    //var fin = function() {
    //    var color = $(this).css('color');
    //    var background = $(this).css('background-color');
    //    $(this).css({color: background, backgroundColor: color, borderColor: color});
    //};
    //var fout = function() {
    //    var color = $(this).css('color');
    //    var background = $(this).css('background-color');
    //    $(this).css({color: background, backgroundColor: color, borderColor: background});
    //};
    //
    //$('input.button, .button.invert').on({mouseover: fin, mouseout: fout});

    $('select').each(function(){
        $(this).selectbox();
    });
});