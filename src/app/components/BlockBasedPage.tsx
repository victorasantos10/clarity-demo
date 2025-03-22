import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const BlockBasedPage = (props: any) => {
    return (
        <main>
            {props.blok.blocks.map((blok: any) => (
                <StoryblokServerComponent blok={blok} key={blok._uid} />
            ))}
        </main>
    );
}