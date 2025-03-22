import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Hero } from "../components/Hero";
import { BlockBasedPage } from "../components/Page";
import { MainArticlesPreview } from "../components/MainArticlesPreview";
import BestBookmakersPage from "../melhores-casas-de-apostas/page";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    melhores_casas_de_apostas: BestBookmakersPage,
    hero: Hero,
    block_based_page: BlockBasedPage,
    main_articles_preview: MainArticlesPreview
  },
  apiOptions: {
    region: 'us',
  },
  enableFallbackComponent: true,
});