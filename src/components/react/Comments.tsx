import Giscus from "@giscus/react";

const { 
  PUBLIC_GISCUS_USERNAME,
  PUBLIC_GISCUS_REPO,
  PUBLIC_GISCUS_REPO_ID,
  PUBLIC_GISCUS_CATEGORY,
  PUBLIC_GISCUS_CATEGORY_ID
} = import.meta.env;

export default function Comments () {

  return (
    <div>
      <Giscus
        id="comments"
        repo={`${PUBLIC_GISCUS_USERNAME}/${PUBLIC_GISCUS_REPO}`}
        repoId={PUBLIC_GISCUS_REPO_ID}
        category={PUBLIC_GISCUS_CATEGORY}
        categoryId={PUBLIC_GISCUS_CATEGORY_ID}
        mapping="og:title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        lang="zh-CN"
        loading="lazy"
        theme={'dark'}
      />
    </div>
  )
}