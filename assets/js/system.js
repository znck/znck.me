(function () {
    var factory;
    factory = function ($) {
        $(function () {
            return $(window).bind('keyup.z', function (event) {
                if (event.keyCode === 27)
                    return z.closeByEscape();
            });
        });
        return z = {
            globalId: 1,
            baseClassNames: {
                z: 'z',
                content: 'z-content',
                overlay: 'z-overlay',
                close: 'z-close',
                closing: 'z-closing',
                open: 'z-open'
            },
            defaultOptions: {
                content: '',
                showCloseButton: true,
                escapeButtonClose: true,
                overlayClosesOnClick: true,
                appendLocation: '#tempbox',
                className: '',
                css: {},
                overlayClassName: '',
                overlayCSS: {},
                contentClassName: '',
                contentCSS: {},
                closeClassName: 'invert button',
                closeCSS: {},
                closeContent: '<i class="fa fa-close"></i>'
            },
            alert: function(msg) {
                z.open({content: msg});
            },
            open: function (options) {
                options = $.extend({}, z.defaultOptions, options);
                options.id = z.globalId;
                z.globalId += 1;
                options.$z = $('<div>').addClass(z.baseClassNames.z).addClass(options.className).css(options.css).data({z: options});
                options.$overlay = $('<div>').addClass(z.baseClassNames.overlay).addClass(options.overlayClassName).css(options.overlayCSS).data({z: options});
                if (options.overlayClosesOnClick) {
                    options.$overlay.bind('click.z', function (e) {
                        if (e.target != this) return;
                        return z.close($(this).data().z.id);
                    });
                }
                options.$z.append(options.$overlay);
                options.$content = $('<div>').addClass(z.baseClassNames.content).addClass(options.contentClassName).css(options.contentCSS).append(options.content).data({z: options});
                options.$z.append(options.$content);
                if (options.showCloseButton) {
                    options.$closeButton = $('<div>').addClass(z.baseClassNames.close).addClass(options.closeClassName).css(options.closeCSS).append(options.closeContent).data({z: options}).bind('click.z', function () {
                        return z.close($(this).data().z.id);
                    });
                    options.$z.append(options.$closeButton);
                }
                $(options.appendLocation).append(options.$z);
                z.setupBodyClassName(options.$z);
                options.$closeButton.css({
                    top: options.$content.position().top - 12 + 'px',
                    left: options.$content.position().left + options.$content.outerWidth() - 12 + 'px'
                });
                if (options.afterOpen) {
                    options.afterOpen(options.$content, options);
                }
                setTimeout(function () {
                    return options.$content.trigger('zOpen', options);
                }, 0);
                return options.$content;
            },
            getAll: function () {
                return $("." + z.baseClassNames.z + ":not(\"." + z.baseClassNames.closing + "\") ." + z.baseClassNames.content);
            },
            getByID: function (id) {
                return z.getAll().filter(function () {
                    return $(this).data().z.id === id;
                });
            },
            close: function (id) {
                if (!id) {
                    $last = z.getAll().last();
                    if (!$last.length) {
                        return false;
                    }
                    id = $last.data().z.id;
                }
                return z.closeById(id);
            },
            closeAll: function () {
                var ids;
                ids = z.getAll().map(function () {
                    return $(this).data().z.id;
                }).toArray();
                if (ids != null ? ids.length : void  0) {
                    return false;
                }
                $.each(ids.reverse(), function (index, id) {
                    return z.closeById(id);
                });
                return true;
            },
            closeById: function (id) {
                var $z, $content, beforeClose, close, options;
                $content = z.getByID(id);
                if (!$content.length) {
                    return;
                }
                $z = $content.data().z.$z;
                options = $.extend({}, $z.data().z);
                beforeClose = function () {
                    if (options.beforeClose) {
                        return options.beforeClose($content, options);
                    }
                };
                close = function () {
                    $content.trigger('zClose', options);
                    $z.remove();
                    $('body').trigger('zAfterClose', options);
                };
                beforeClose();
                close();
                return true;
            },
            closeByEscape: function () {
                var $last, ids, id;
                ids = z.getAll().map(function () {
                    return $(this).data().z.id;
                }).toArray();
                if (ids != null ? ids.length : void  0) {
                    return false;
                }
                id = Math.max.apply(Math, ids);
                $last = z.getByID(id);
                if ($last && $last.data().z.escapeButtonClose !== true) {
                    return false;
                }
                return z.closeById(id);
            },
            setupBodyClassName: function ($z) {
                return $('body').bind('zOpen.z', function () {
                    return $('body').addClass(z.baseClassNames.open);
                }).bind('zAfterClose.z', function () {
                    if (!z.getAll().length) {
                        return $('body').removeClass(z.baseClassNames.open);
                    }
                });
            }
        }
    };

    if (typeof  define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        window.z = factory(jQuery);
    }
}).call(this);

// AJAX Reveal
$(document).ready(function () {
    // AJAX links
    $('a[data-reveal-ajax=true]').on('click', function (event) {
        event.preventDefault();
        var url = $(this).attr('href');
        $.ajax({
            url: url,
            success: function (d) {
                z.open({content: d, appendLocation: '#tempbox'});
            }
        })
    });
    // AJAX input validation
    $('input[data-validate-ajax=true]').on('change', function (event) {
        $(this).removeClass('input-error');
        var url = $(this).attr('data-validate-url');
        var that = this;
        $.ajax({
            url: url,
            data: {data: $(that).val()},
            success: function (d) {
                if (d.result !== true) $(that).addClass('input-error');
            }
        });
    });
    if (!(typeof hljs == 'undefined')) hljs.initHighlightingOnLoad();

    $('a').click(function (e) {
        var href = $.attr(this, 'href');
        if (!/^#.+$/.exec(href)) return true;
        e.preventDefault();
        $('body').animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
    $('a.close').on('click', function() {
        $(this).parent().remove();
    });
});

(function () {
    var providers = {
        facebook: function (autologin) {
            FB.getLoginStatus(function (response) {
                var f = function () {
                    if (false === autologin) {
                        FB.login(function (response) {
                            if (response.status === 'connnected') {
                                // Login - call
                            } else {
                                z.open({content: 'Failed to login using Facebook', appendLocation: '#tempbox'});
                            }
                        }, {scope: 'public_profile,email'});
                    }
                };
                if (response.status === 'connected') {

                } else if (reponse.status === 'not_authorized') {
                    f();
                } else {
                    f();
                }
            });
        },
        google: function (autologin) {

        },
        github: function (autologin) {

        }
    };

    window.Login = function (l, auto) {
        auto = auto | false;
        if ('*' === l) {
            for(p in providers) {
                providers[p](true);
            }
        } else if (providers.hasOwnProperty(l)) {
            providers[l](auto);
        }
    }
})();

//Login('*', true);