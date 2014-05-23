'use strict';

var entropy = require('../index.js');

(function($) {
    $.fn.entropy = function(options) {
        options = $.extend({
            strong: 100,
            update: null,
            states: [
            'progress-bar-danger',
            'progress-bar-warning',
            'progress-bar-info',
            'progress-bar-success'
          ]
        }, options || {});

        this.each(function() {
            var $self = $(this),
                source = $self.data('entropy-source');

            $(source).keyup(function() {
                var e = entropy($(this).val()),
                    pct = Math.round(e / options.strong * 100),
                    state = Math.min(3, Math.floor(pct / (100 / (options.states.length - 1))));

                $self.removeClass(options.states.join(' '))
                    .addClass(options.states[state])
                    .css({
                        width: pct + '%'
                    });

                if (options.update instanceof Function) options.update($self, pct, e);
            });
        });
    };
})(window.jQuery);
