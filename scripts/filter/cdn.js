const cheerio = require('cheerio')
const logs = []
hexo.extend.filter.register('after_render:html', function (str) {

    const isDev = hexo.env.cmd === 'server'

    if (isDev) {
        return str
    }

    const $ = cheerio.load(str, { decodeEntities: false })

    const cdnPrefixAssets = hexo.theme.config.cdn?.prefix?.assets
    const cdnPrefixImg = hexo.theme.config.cdn?.prefix?.img

    if (cdnPrefixAssets || cdnPrefixImg) {
        $('link[rel="stylesheet"], script[src], img[src]').each(function () {
            const tag = $(this).is('link') ? 'link' : $(this).is('script') ? 'script' : 'img';
            const replaceKey = tag === 'link' ? 'href' : 'src'
            const url = $(this).attr(replaceKey);

            if (url && (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('//') && !url.startsWith('data:'))) {
                const newUrl = tag === 'img' ? (cdnPrefixImg + url) : (cdnPrefixAssets + url);
                $(this).attr(replaceKey, newUrl);
                if (!isDev) {
                    const log = `${tag}: ${url}`
                    if (!logs.includes(log)) {
                        console.log(`\x1b[34mTIP\x1b[0m  cdn replace ${log}`, '')
                    }
                    logs.push(log)
                }

            }
        })
    }

    return $.html()
})
