import type { MarkdownHeading } from 'astro'

export interface TocItem extends MarkdownHeading {
  children: TocItem[]
}

interface TocOpts {
  minHeadingLevel: number
  maxHeadingLevel: number
}

// 将Astro生成的平面标题数组转换为嵌套树结构
export function generateToC(
  headings: MarkdownHeading[],
  { minHeadingLevel, maxHeadingLevel }: TocOpts,
) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel)
  const toc: TocItem[] = []
  for (const heading of headings) {
    injectChild(toc, { ...heading, children: [] })
  }
  return toc
}

// 根据深度属性，将 item 注入到树中对应的深度
function injectChild(items: TocItem[], item: TocItem): void {
  const lastItem = items.at(-1)
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item)
  }
  else {
    return injectChild(lastItem.children, item)
  }
}

// 根据 headings 生成 ToC
export function getToC(headings: MarkdownHeading[]) {
  const tocConfig = {
    minHeadingLevel: 2,
    maxHeadingLevel: 4,
  }

  return {
    items: generateToC(headings, tocConfig),
    label: 'On This Page',
  }
}
