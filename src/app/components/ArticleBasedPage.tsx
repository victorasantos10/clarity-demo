import { StoryblokServerComponent } from "@storyblok/react/rsc";
import BettingCardList from "./BettingCardList";
import { bettingData } from "../data/bettingData";

export const ArticleBasedPage = (props: any) => {
    return (
        <main>
            {props.blok.article?.map((nestedBlok: any) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}

            <section className="py-10">
                <BettingCardList bettingData={bettingData}></BettingCardList>
            </section>
        </main>)
}
