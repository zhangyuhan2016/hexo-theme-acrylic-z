const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function (str) {

    const isDev = hexo.env.env === 'development'
    if (isDev) {
        return str
    }

    const $ = cheerio.load(str, { decodeEntities: false });

    const cdnPrefixAssets = hexo.theme.config.cdn?.prefix?.assets;
    const cdnPrefixImg = hexo.theme.config.cdn?.prefix?.img;

    if (cdnPrefixAssets || cdnPrefixImg) {
        $('link[rel="stylesheet"], script[src], img[src]').each(function () {
            const tag = $(this).is('link') ? 'link' : $(this).is('script') ? 'script' : 'img';
            const replaceKey = tag === 'link' ? 'href' : 'src'
            const url = $(this).attr(replaceKey);

            if (url && (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('//') && !url.startsWith('data:'))) {
                const newUrl = tag === 'img' ? (cdnPrefixImg + url) : (cdnPrefixAssets + url);
                if (!isDev) {
                    console.log(`[cdn replace]: \n  ${tag}\n    ${url}\n    =>  ${newUrl}`)
                }
                $(this).attr(replaceKey, newUrl);
            }
        });
    }

    return $.html();
});
