export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-가-힣]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export const generatePreview = (
  content: string,
  maxLength: number = 200
): string => {
  const plainText = content
    .replace(/!\[.*?]\(.*?\)/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_~`]/g, '')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .trim()

  if (plainText.length <= maxLength) {
    return plainText
  }

  const trimmed = plainText.slice(0, maxLength)
  const lastSpaceIndex = trimmed.lastIndexOf(' ')

  if (lastSpaceIndex > 0) {
    return trimmed.slice(0, lastSpaceIndex) + '...'
  }

  return trimmed + '...'
}

export const generateTags = (tagsString: string) => {
  //TODO tags를 string[]로 변환 (쉼표로 구분된 문자열 가정)
  return tagsString
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
}
