import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStoryblokStory } from "./api/storyblok-client";
import BettingCardList from "./components/BettingCardList";
import StarRating from "./components/StarRating";
import { bettingData } from "./data/bettingData";

const HomePage = async (props: any) => {
  const BASE_PATH = "home";
  const story = await fetchStoryblokStory(BASE_PATH, undefined);
  return (
    <>
      <div
        className="bg-cover bg-no-repeat"
        style={{ height: '700px', backgroundImage: 'url(\'https://picsum.photos/2000/1000\')', display: 'grid', placeItems: 'center' }}>
        <div style={{}} className="py-8 mt-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Descubra as melhores casas de apostas para você</h1>
          <p className="mb-8 mt-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white">Jogue com responsabilidade, apostando em casas de apostas seguras e com boa reputação</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Ver mais
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                 */}
      </div>
      <h1 className="mt-10 text-center text-4xl font-extrabold mx-auto">Artigos</h1>

      <StoryblokStory story={story}></StoryblokStory>

      <section className="pb-15">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-8 mb-6">
            <h2 className="mt-10 font-semibold text-heading-5 text-dark">Top casas de apostas</h2>
            <a href="#" className="mt-10 group text-dark leading-none">
              <span
                className="flex items-center gap-2 bg-linear-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]"
              >
                Top casas de apostas

                <svg
                  className="fill-current group-hover:rotate-45 transition-all"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_675_6418)">
                    <path
                      d="M13.7734 3.59902L5.48035 3.53935C5.12237 3.53935 4.84395 3.81778 4.84395 4.17575C4.84395 4.53372 5.12237 4.81215 5.48035 4.81215L12.2222 4.87181L3.77003 13.3239C3.53138 13.5626 3.53138 13.9603 3.77003 14.199C4.00868 14.4376 4.42632 14.4575 4.66496 14.2189L13.1569 5.72696L13.2165 12.5483C13.2165 12.9063 13.495 13.1847 13.8529 13.1847C14.012 13.1847 14.1711 13.1052 14.2905 12.9859C14.4098 12.8665 14.4893 12.7074 14.4694 12.5284L14.4098 4.23541C14.4098 3.87744 14.1314 3.59902 13.7734 3.59902Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_675_6418">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </a>
          </div>

          <div className="pt-14 border-t border-gray-3">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5"
            >
              {bettingData.map((val, ind, arr) => (
                <div key={`bet-ind-${ind}`} className="group">
                  <div
                    className="border border-gray-3 rounded-[20px] bg-gray p-5 group-hover:bg-white group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all"
                  >
                    <div className="flex flex-wrap items-center gap-8">
                      <div className="w-25 h-25 rounded-full overflow-hidden">
                        <img src={val.imageSrc} alt="user" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-custom-xl text-dark mb-1">
                          {val.name}
                        </h3>
                        <StarRating rating={val.rating}></StarRating>
                        <div
                          className="flex items-center gap-2 text-custom-sm mt-2.5"
                        >

                          <button
                            type="submit"
                            className="rounded-md cp text-white font-medium inline-flex justify-center py-1.5 px-2 bg-primary hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-300"
                          >
                            Cadastre-se
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export default HomePage;