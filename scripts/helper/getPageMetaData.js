const { extractMarkdownText } = require('../utils/extract')

hexo.extend.helper.register('getPageMetaData', function (page) {
    page._keywords = ''
    page._summary = ''
    if (page.layout === 'post') {
        page._keywords = page.tags.map(tag => tag.name).join('、')
        page._summary = extractMarkdownText(page._content)
    }
    return page
})
