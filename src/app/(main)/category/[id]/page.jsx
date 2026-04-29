import LeftSideBar from "@/components/shared/Homepage/News/LeftSideBar";
import SocialLogin from "@/components/shared/Homepage/News/SocialLogin";

const fetchCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const response = res.json();
    return response;
}

const fetchCategoryData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const news = await res.json();
    return news;
}

const CategoryData = async ({ params }) => {
    const res = await params;
    console.log(res.id);
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
                        data.length > 0 ? data.map(d => <p key={d._id} className="px-2 py-3 bg-base-200 mb-3">{d.title}</p>) : <h1 className="text-center font-bold text-4xl">No News Found</h1>
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