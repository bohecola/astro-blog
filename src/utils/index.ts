type SortOrder = 'asc' | 'desc';

export const sortByDate = (array: any[], order: SortOrder = 'desc') => {
  const newArr = [...array];

  const sortedArray = newArr.sort((a: any, b: any) => {
    const d1 = new Date(a.data.pubDate).valueOf();
    const d2 = new Date(b.data.pubDate).valueOf();

    if (order === 'asc') return d1 - d2;

    return d2 - d1;
  });
  return sortedArray;
};