import Link from "next/link";

export const MainArticlesPreview = (props: any) => {
    return (
        <section
            id="home"
            className="rounded-b-[50px] relative overflow-hidden z-10 pb-15 pt-34"
        >
            <div>
                <div
                    className="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray"
                ></div>
                <div
                    className="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full"
                >
                    <img src="/images/hero/hero-bg.svg" alt="Hero" />
                </div>
            </div>

            <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
                <div className="flex flex-wrap gap-x-7.5 gap-y-9">
                    <div
                        className="max-w-[1170px] w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-white shadow-1 rounded-xl p-4 lg:p-2.5"
                    >
                        <div className="lg:max-w-[536px] w-full">
                            <Link href={props.blok.destination_link.cached_url}>
                                <img
                                    className="w-full"
                                    src={props.blok.image.filename}
                                    alt={props.blok.image.alt}
                                />
                            </Link>
                        </div>

                        <div className="lg:max-w-[540px] w-full">
                            <a
                                href={props.blok.destination_link.cached_url}
                                className="inline-flex text-purple-dark bg-purple/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                            >{props.blok.tag}</a>
                            <h1
                                className="font-bold text-custom-4 xl:text-heading-4 text-dark mb-4"
                            >
                                <a href={props.blok.destination_link.cached_url}>
                                    {props.blok.title}
                                </a>
                            </h1>
                            <p className="max-w-[524px]">
                                {props.blok.quick_description}
                            </p>
                            <div className="flex items-center gap-2.5 mt-5">
                                <a href="author.html" className="flex items-center gap-3">
                                    <div className="flex w-6 h-6 rounded-full overflow-hidden">
                                        <img src="/images/user/user-01.png" alt="user" />
                                    </div>
                                    <p className="text-sm">{props.blok.author}</p>
                                </a>

                                <span
                                    className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                                ></span>

                                <p className="text-sm">{props.blok.date}</p>
                            </div>
                        </div>
                    </div>
                    {props.blok.child_articles?.map((article: any) => (

                        <div key={article._uid}
                            className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 rounded-xl p-2.5"
                        >
                            <div className="lg:max-w-[238px] w-full">
                                <a href="blog-single.html">
                                    <img
                                        className="w-full"
                                        src={article.image.filename}
                                        alt={article.image.alt}
                                    />
                                </a>
                            </div>

                            <div className="lg:max-w-[272px] w-full">
                                <a
                                    href="category.html"
                                    className="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                                >{article.tag}</a>
                                <h2 className="font-semibold text-custom-lg text-dark mb-3">
                                    <a href="blog-single.html">
                                        {article.title}
                                    </a>
                                </h2>
                                <div className="flex items-center gap-2.5">
                                    <p className="text-sm">
                                        <a href="author.html">Por: {article.author}</a>
                                    </p>

                                    <span
                                        className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                                    ></span>

                                    <p className="text-sm">{article.Date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </section>);
}