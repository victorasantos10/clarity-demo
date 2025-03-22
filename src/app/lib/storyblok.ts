import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Hero } from "../components/Hero";
import { Page } from "../components/Page";
import { MainArticlePreview } from "../components/MainArticlePreview";
import { SmallArticlePreview } from "../components/SmallArticlePreview";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    page: Page,
    main_article_preview: MainArticlePreview,
    small_article_preview: SmallArticlePreview,
  },
  apiOptions: {
    region: 'us',
  },
  enableFallbackComponent: true,
});