import { ISbStoryParams } from "@storyblok/react";
import { getStoryblokApi } from "../lib/storyblok";

export const fetchStoryblokStory = async (basePath: string, slug?: string, options?: ISbStoryParams) => {
    const client = getStoryblokApi();

    const optionsParam = {
        version: options?.version ?? "draft",
        ...options
    }

    //Constructing the slug param considering the slug is optional
    const slugParam = slug ? `/${slug}` : "";
    
    const response = await client.getStory(`${basePath}/${slugParam}`, optionsParam);
    return response.data.story;
}