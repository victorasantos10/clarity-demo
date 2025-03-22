export const Article = (props: any) => {
    const paragraphs = props.blok?.article_content?.content?.filter((item: any) => item.type == "paragraph");

    console.log(paragraphs[0].content);
    return (
        <section className="pt-31.5 pb-17.5">
            <div className="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="max-w-[770px] mx-auto text-center">
                    <a
                        href="category.html"
                        className="inline-flex text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full mb-1"
                    >{props.blok.tag}</a
                    >
                    <h1
                        className="font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark mb-5"
                    >
                        {props.blok.title}
                    </h1>
                    <p className="text-body">
                        {props.blok.quick_description}
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-7.5">
                        <div className="flex w-12.5 h-12.5 rounded-full overflow-hidden">
                            <img src="./images/user/user-01.png" alt="user" />
                        </div>

                        <div className="text-left">
                            <h4 className="font-medium text-custom-lg text-dark mb-1">
                                {props.blok.author}
                            </h4>
                            <div className="flex items-center gap-1.5">
                                <p>{props.blok.date}</p>
                                <span
                                    className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                                ></span>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src={props.blok.image.filename}
                    alt={props.blok.image.alt}
                    className="mt-10 mb-11"
                />

                <div className="max-w-[770px] mx-auto">
                    {paragraphs.map((item: any) => (
                        <p key={item._uid} className="mb-5 text-body">
                            {item.content.map((mark: string) => {
                                if (mark === "strong") {
                                    return <strong>{item.text}</strong>
                                }
                                return item.text;
                            })}
                        </p>
                    ))}
                    <div>
                        <p className="mb-5 text-body">
                            As discussed in the introduction post, one of the best things
                            about Ghost is just how much you can customize to turn your site
                            into something unique. Everything about your layout and design
                            can be changed, so you're not stuck with yet another clone of a
                            social network profile.
                        </p>

                        <p className="font-semibold text-dark mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            id quam at justo ullamcorper vulputate. Donec mattis aliquam
                            urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                            purus, quis feugiat.
                        </p>

                        <p className="mb-5 text-body">
                            Sed ullamcorper dui at risus viverra, nec cursus leo
                            ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.
                        </p>

                        <p className="mb-5 text-body">
                            Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
                            auctor orci, eu dictum diam diam nec neque. Pellentesque
                            habitant morbi tristique senectus et netus et malesuada fames ac
                            turpis egestas. Fusce congue dui nec dui lobortis maximus. Morbi
                            bibendum, nisi vel cursus.
                        </p>

                        <p className="text-body">
                            Adipiscing elit. Nulla id quam at justo ullamcorper vulputate.
                            Donec mattis aliquam urna, sed placerat dolor volutpat vel.
                            Maecenas quis feugiat.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-semibold text-heading-6 text-dark mb-6">
                            Quisque rutrum varius lobortis
                        </h3>

                        <p className="mb-5 text-body">
                            Sed ullamcorper dui at risus viverra, nec cursus leo
                            ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per
                            <a href="#" className="text-primary underline">inceptos</a>
                            himenaeos.
                        </p>

                        <p className="mb-5 text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            id quam at justo ullamcorper vulputate. Donec mattis aliquam
                            urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                            purus, quis feugiat.
                        </p>

                        <p className="text-body">
                            As discussed in the introduction post, one of the best things
                            about Ghost is just how much you can customize to turn your site
                            into something unique. Everything about your layout and design
                            can be changed, so you're not stuck with yet another clone of a
                            social network profile.
                        </p>

                        <ul className="flex flex-col gap-3.5 mt-7">
                            <li className="flex gap-5 text-body">
                                <span
                                    className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]"
                                ></span>
                                <p>
                                    <span className="text-dark font-semibold"
                                    >Introduction post,</span
                                    >
                                    one of the best things about Ghost is just how much you can
                                    netus et malesuada fames ac turpis egestas. Fusce congue dui
                                    nec dui lobortis maximus.
                                </p>
                            </li>

                            <li className="flex gap-5 text-body">
                                <span
                                    className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]"
                                ></span>
                                <p>
                                    <span className="text-dark font-semibold">how much</span>
                                    you can netus et malesuada another clone of a social network
                                    profile.
                                </p>
                            </li>

                            <li className="flex gap-5 text-body">
                                <span
                                    className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]"
                                ></span>
                                <p>
                                    <span className="text-dark font-semibold">Sed ullamcorper</span>
                                    dui at risus viverra, nec cursus leo ullamcorper. Class
                                    aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos himenaeos.
                                </p>
                            </li>

                            <li className="flex gap-5 text-body">
                                <span
                                    className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]"
                                ></span>
                                <p>
                                    <span className="text-dark font-semibold">Libero vitae</span>
                                    pharetra rhoncus, tellus urna auctor orci, eu dictum diam
                                </p>
                            </li>
                        </ul>

                        <div
                            className="border-l-[3px] border-gray-3 bg-gray py-5 px-8 mt-7.5"
                        >
                            <p className="font-medium italic text-dark">
                                “Success is not a destination. Success is a decision you make
                                on a daily, hourly, and even moment-to-moment basis.” —
                                Nicolas Cole
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-semibold text-heading-6 text-dark mb-6">
                            One of the best things
                        </h3>

                        <p className="mb-5 text-body">
                            Sed ullamcorper dui at risus viverra, nec cursus leo
                            ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per cursus himenaeos.
                        </p>

                        <p className="mb-5 text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            id quam at justo ullamcorper vulputate. Donec mattis aliquam
                            urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                            purus, quis feugiat.
                        </p>

                        <p className="text-body">
                            As discussed in the introduction post, one of the best things
                            about Ghost is just how much you can customize to turn your site
                            into something unique. Everything about your layout and design
                            can be changed, so you're not stuck with yet another clone of a
                            social network profile.
                        </p>

                        <img
                            src="./images/blog/blog-single-04.png"
                            alt="blog"
                            className="my-8"
                        />

                        <p className="mb-5 text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            id quam at justo ullamcorper vulputate. Donec mattis aliquam
                            urna, sed placerat dolor volutpat vel. Maecenas posuere sem
                            purus, quis feugiat.
                        </p>

                        <p className="text-body">
                            As discussed in the introduction post, one of the best things
                            about Ghost is just how much you can customize to turn your site
                            into something unique. Everything about your layout and design
                            can be changed, so you're not stuck with yet another clone of a
                            social network profile.
                        </p>
                    </div>

                    {/*-- Blog Show More BTN */}
                    <button
                        className="flex justify-center font-medium text-dark border border-dark rounded-md py-3 px-7.5 hover:bg-dark hover:text-white ease-in duration-200 mx-auto mt-10"
                    >
                        View all Posts
                    </button>

                    {/*-- Author Details */}
                    <div className="border-t border-gray-3 pt-10 mt-12.5">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-9">
                            <div
                                className="max-w-[133px] w-full h-[133px] rounded-full flex items-center justify-center border border-gray-3"
                            >
                                <a
                                    href="author.html"
                                    className="max-w-[97px] w-full h-[97px] shadow-img rounded-full overflow-hidden"
                                >
                                    <img src="./images/user/user-01.png" alt="user" />
                                </a>
                            </div>

                            <div>
                                <h4 className="font-medium text-custom-lg text-dark mb-3">
                                    Adrio Devid
                                </h4>
                                <p>
                                    Breakfast procuring no end happiness allowance assurance
                                    frank. Met simplicity nor difficulty unreserved who.
                                </p>
                                <a
                                    href="author.html"
                                    className="flex text-custom-sm text-primary mt-4"
                                >View profile</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}