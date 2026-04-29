import Marquee from "react-fast-marquee";

const BreakingNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const { data } = await res.json();
    return (
        <div className="bg-gray-300 flex items-center gap-5 py-3 px-2 mb-4 w-11/12 md:w-10/12 mx-auto">
            <button className="btn bg-[#D72050] text-white text-xl font-medium">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    data.map(news => <span className="mx-10" key={news.id}>{news.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;