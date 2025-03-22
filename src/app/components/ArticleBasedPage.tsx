import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const ArticleBasedPage = (props: any) => {
    return (
        <main>
            {props.blok.article?.map((nestedBlok: any) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>)
}
