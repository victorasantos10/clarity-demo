import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStoryblokStory } from "../api/storyblok-client";

const BestBookmakersPage = async (props: any) => {
    const { slug } = await props.params;
    const BASE_PATH = "melhores-casas-de-apostas";
    const story = await fetchStoryblokStory(BASE_PATH, slug); 
    return (
        <StoryblokStory story={story}></StoryblokStory>
    );
}

export default BestBookmakersPage;