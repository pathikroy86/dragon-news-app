import LeftSideBar from "@/components/shared/Homepage/News/LeftSideBar";
import SocialLogin from "@/components/shared/Homepage/News/SocialLogin";

const fetchCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const response = res.json();
  return response;
}

const fetchCategoryData = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/category/08')
  const news = await res.json();
  return news;
}

export default async function Home() {
  const { data } = await fetchCategories();
  const categories = data.news_category;
  const news = await fetchCategoryData();
  const allNews = news.data;

  return (
    <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="col-span-6">
        {
          allNews.map(news => <p key={news._id} className="bg-base-300 py-2 px-3 mb-2">{news.title}</p>)
        }
      </div>
      <div className="col-span-3">
        <SocialLogin></SocialLogin>
      </div>

    </div>
  );
}
