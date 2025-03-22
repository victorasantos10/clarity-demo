import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStoryblokStory } from "./api/storyblok-client";

const HomePage = async (props: any) => {
    const BASE_PATH = "home";
    const story = await fetchStoryblokStory(BASE_PATH, undefined); 
    return (
        <StoryblokStory story={story}></StoryblokStory>
    );
  }
  
export default HomePage;