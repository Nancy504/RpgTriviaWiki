function navigate(url) {
     // Sets the browser's current location to the provided URL, redirecting the user.
    window.location.href = url;
}

// Hover preview functionality
document.addEventListener("DOMContentLoaded", function () {
    const preview = document.getElementById('link-preview');
    const frame = document.getElementById('preview-frame');

    function showPreview(url, x, y) {
        frame.src = url;
        preview.style.display = 'block';
        preview.style.top = (y + 15) + 'px';
        preview.style.left = (x + 15) + 'px';
    }

    function hidePreview() {
        preview.style.display = 'none';
        frame.src = '';
    }

    // Handle anchor tags
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', e => showPreview(link.href, e.pageX, e.pageY));
        link.addEventListener('mousemove', e => {
            preview.style.top = (e.pageY + 15) + 'px';
            preview.style.left = (e.pageX + 15) + 'px';
        });
        link.addEventListener('mouseout', hidePreview);
    });

    // Handle buttons with data-href
    document.querySelectorAll('button[data-href]').forEach(button => {
        button.addEventListener('mouseover', e => showPreview(button.dataset.href, e.pageX, e.pageY));
        button.addEventListener('mousemove', e => {
            preview.style.top = (e.pageY + 15) + 'px';
            preview.style.left = (e.pageX + 15) + 'px';
        });
        button.addEventListener('mouseout', hidePreview);
    });
});

// Hover preview functionality

(function ($) {
    $.fn.linkPreview = function (options) {
        const settings = $.extend({
            previewSelector: '#link-preview',
            frameSelector: '#preview-frame',
            offsetX: 15,
            offsetY: 15,
            hideDelay: 100
        }, options);

        const $preview = $(settings.previewSelector);
        const $frame = $(settings.frameSelector);
        let previewTimeout;

        function showPreview(url) {
            $frame.attr('src', url);
            $preview.show();
        }

        function hidePreview() {
            $frame.attr('src', '');
            $preview.hide();
        }

        function movePreview(x, y) {
            $preview.css({
                top: (y + settings.offsetY) + 'px',
                left: (x + settings.offsetX) + 'px'
            });
        }

        function attachPreviewEvents($el, getUrl) {
            $el.on('mouseover', function (e) {
                clearTimeout(previewTimeout);
                showPreview(getUrl($(this)));
                movePreview(e.pageX, e.pageY);
            });

            $el.on('mousemove', function (e) {
                movePreview(e.pageX, e.pageY);
            });

            $el.on('mouseout', function () {
                previewTimeout = setTimeout(hidePreview, settings.hideDelay);
            });
        }

        return this.each(function () {
            const $el = $(this);
            if ($el.is('a')) {
                attachPreviewEvents($el, el => el.attr('href'));
            } else if ($el.is('button') && $el.data('href')) {
                attachPreviewEvents($el, el => el.data('href'));
            }
        });
    };
    
    $(document).ready(function () {
        $('a, button[data-href]').linkPreview();
    });
})(jQuery);

$('a, button[data-href]').linkPreview({
    offsetX: 10,
    offsetY: 20
});
