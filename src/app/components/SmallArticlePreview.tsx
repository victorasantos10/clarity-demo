export const SmallArticlePreview = (props: any) => {
    return (
        <>


            <div
                className="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 rounded-xl p-2.5"
            >
                <div className="lg:max-w-[238px] w-full">
                    <a href="blog-single.html">
                        <img
                            className="w-full"
                            src="/images/hero/hero-03.png"
                            alt="hero"
                        />
                    </a>
                </div>

                <div className="lg:max-w-[272px] w-full">
                    <a
                        href="category.html"
                        className="inline-flex text-green-dark bg-green/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                    >Travel</a
                    >
                    <h2 className="font-semibold text-custom-lg text-dark mb-3">
                        <a href="blog-single.html">
                            Traveller Visiting Ice Cave With Amazing Eye-catching view
                            with nature
                        </a>
                    </h2>
                    <div className="flex items-center gap-2.5">
                        <p className="text-sm">
                            <a href="author.html">By Adrio Devid</a>
                        </p>

                        <span
                            className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                        ></span>

                        <p className="text-sm">Sep 10, 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}