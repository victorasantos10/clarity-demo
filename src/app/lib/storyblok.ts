import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Hero } from "../components/Hero";
import { Page } from "../components/Page";
import { MainArticlesPreview } from "../components/MainArticlesPreview";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    page: Page,
    main_articles_preview: MainArticlesPreview
  },
  apiOptions: {
    region: 'us',
  },
  enableFallbackComponent: true,
});