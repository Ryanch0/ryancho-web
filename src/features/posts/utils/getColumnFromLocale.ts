export const getColumnFromLocale = (
  locale: string,
  col_en: string,
  col_kr: string
) => {
  if (locale === 'ko') return col_kr

  return col_en
}
