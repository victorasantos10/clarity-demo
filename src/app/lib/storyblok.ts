import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Hero } from "../components/Hero";
import { BlockBasedPage } from "../components/BlockBasedPage";
import { MainArticlesPreview } from "../components/MainArticlesPreview";
import BestBookmakersPage from "../melhores-casas-de-apostas/page";
import { ArticleBasedPage } from "../components/ArticleBasedPage";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    ["melhores-casas-de-apostas"]: BestBookmakersPage,
    hero: Hero,
    block_based_page: BlockBasedPage,
    article_based_page: ArticleBasedPage,
    main_articles_preview: MainArticlesPreview
  },
  apiOptions: {
    region: 'us',
  },
  enableFallbackComponent: true,
});