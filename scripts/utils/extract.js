function extractMarkdownText(markdown, num = 200) {
    // 去除换行符、代码块和图片等元素
    const cleanedMarkdown = markdown
        .replace(/\n/g, ' ')
        .replace(/```[\s\S]*?```/g, '')
        .replace(/!\[.*?\]\(.*?\)/g, '');

    // 提取前 200 个字符
    const extractedText = cleanedMarkdown.substring(0, num);

    // 去除多余的空格
    const trimmedText = extractedText.replace(/\s+/g, ' ').trim();

    return trimmedText;
}

module.exports = {
    extractMarkdownText
}
