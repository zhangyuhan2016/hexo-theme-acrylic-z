const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function (str) {
    const $ = cheerio.load(str, { decodeEntities: false });

    const cdnPrefixAssets = hexo.theme.config.cdn?.prefix?.assets;
    const cdnPrefixImg = hexo.theme.config.cdn?.prefix?.img;

    if (cdnPrefixAssets || cdnPrefixImg) {
        $('link[rel="stylesheet"], script[src], img[src]').each(function () {
            const tag = $(this).is('link') ? 'link' : $(this).is('script') ? 'script' : 'img';
            const url = $(this).attr('src');

            if (url && (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('//') && !url.startsWith('data:'))) {
                const newUrl = tag === 'img' ? (cdnPrefixImg + url) : (cdnPrefixAssets + url);
                $(this).attr('src', newUrl);
            }
        });
    }

    return $.html();
});
