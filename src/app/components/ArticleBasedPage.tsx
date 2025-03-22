import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const ArticleBasedPage = (props: any) => {
    return (
        <main>
            <StoryblokServerComponent blok={props.blok} key={props.blok._uid} />
        </main>
    );
}