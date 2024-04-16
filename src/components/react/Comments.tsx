import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

const { 
  PUBLIC_GISCUS_USERNAME,
  PUBLIC_GISCUS_REPO,
  PUBLIC_GISCUS_REPO_ID,
  PUBLIC_GISCUS_CATEGORY_ID
} = import.meta.env;

// 得到主题
function getCurrentTheme() {
  const storedTheme = typeof localStorage !== 'undefined' && localStorage.getItem('theme');
  return storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

export default function Comments () {
  const initialTheme = getCurrentTheme();

  const themeChangeHandler = ({ detail: { themeValue } }: CustomEvent<ThemeData>) => {
    setTheme(themeValue);
  }
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    window.addEventListener("app:themechange", themeChangeHandler);

    return () => {
      window.removeEventListener("app:themechange", themeChangeHandler);
    };
  }, []);

  return (
    <div>
      <Giscus
        id="comments"
        repo={`${PUBLIC_GISCUS_USERNAME}/${PUBLIC_GISCUS_REPO}`}
        repoId={PUBLIC_GISCUS_REPO_ID}
        category="Announcements"
        categoryId={PUBLIC_GISCUS_CATEGORY_ID}
        mapping="og:title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        lang="zh-CN"
        loading="lazy"
        theme={theme}
      />
    </div>
  );
}