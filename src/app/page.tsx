import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStoryblokStory } from "./api/storyblok-client";

const HomePage = async (props: any) => {
  const BASE_PATH = "home";
  const story = await fetchStoryblokStory(BASE_PATH, undefined);
  return (
    <>
      <div
        className="bg-cover bg-no-repeat"
        style={{ height: '500px', backgroundImage: 'url(\'https://picsum.photos/2000/1000\')', display:'grid', placeItems: 'center' }}>
        <div style={{}} className="py-8 mt-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Descubra as melhores casas de apostas para você</h1>
          <p className="mb-8 mt-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white">Jogue com responsabilidade, apostando em casas de apostas seguras e com boa reputação</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Learn more
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                 */}
      </div>
      <StoryblokStory story={story}></StoryblokStory>
    </>
  );
}

export default HomePage;