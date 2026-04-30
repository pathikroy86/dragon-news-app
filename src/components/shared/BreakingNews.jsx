const BreakingNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const { data } = await res.json();
    const uniqueNews = data.filter((news, index, list) => (
        index === list.findIndex((item) => item.title === news.title)
    ));

    return (
        <div className="bg-gray-300 flex items-center gap-5 py-3 px-2 mb-4 w-11/12 md:w-10/12 mx-auto">
            <button className="btn bg-[#D72050] text-white text-xl font-medium">Latest</button>
            <div className="overflow-hidden flex-1">
                <div className="flex w-max whitespace-nowrap animate-news-ticker hover:[animation-play-state:paused]">
                    {
                        uniqueNews.map(news => <span className="mx-10" key={news._id}>{news.title}</span>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
