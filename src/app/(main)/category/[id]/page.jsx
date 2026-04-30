import LeftSideBar from "@/components/shared/Homepage/News/LeftSideBar";
import NewsCard from "@/components/shared/Homepage/News/NewsCard";
import SocialLogin from "@/components/shared/Homepage/News/SocialLogin";
import { fetchCategories, fetchCategoryData } from "@/lib/datafetch";

const CategoryData = async ({ params }) => {
    const res = await params;
    const response = await fetchCategories();
    const categories = response.data.news_category;
    const { data } = await fetchCategoryData(res.id);

    return (
        <div>
            <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <LeftSideBar categories={categories} activeId={res.id}></LeftSideBar>
                </div>
                <div className="col-span-6">
                    {
                        data.length > 0 ? data.map(news => <NewsCard key={news._id} news={news} className="px-2 py-3 bg-base-200 mb-3"></NewsCard>) : <h1 className="text-center font-bold text-4xl">No News Found</h1>
                    }
                </div>
                <div className="col-span-3">
                    <SocialLogin></SocialLogin>
                </div>

            </div>
        </div>
    );
};

export default CategoryData;
