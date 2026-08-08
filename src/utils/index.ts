type SortOrder = 'asc' | 'desc';

export const sortByDate = (array: any[], order: SortOrder = 'desc') => {
  const newArr = [...array];

  // pubDate 是可选字段，缺失或非法时返回 null
  const getTime = (item: any) => {
    const time = new Date(item.data.pubDate).valueOf();
    return Number.isNaN(time) ? null : time;
  };

  const sortedArray = newArr.sort((a: any, b: any) => {
    const d1 = getTime(a);
    const d2 = getTime(b);

    // 无日期的文章固定排在末尾
    if (d1 === null && d2 === null) return 0;
    if (d1 === null) return 1;
    if (d2 === null) return -1;

    if (order === 'asc') return d1 - d2;

    return d2 - d1;
  });
  return sortedArray;
};