import LeftSideBar from "@/components/shared/Homepage/News/LeftSideBar";
import NewsCard from "@/components/shared/Homepage/News/NewsCard";
import SocialLogin from "@/components/shared/Homepage/News/SocialLogin";
import { fetchAllNewsData, fetchCategories } from "@/lib/datafetch";

export default async function Home() {
  const { data } = await fetchCategories();
  const categories = data.news_category;
  const news = await fetchAllNewsData();
  const allNews = news.data;

  return (
    <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="col-span-6">
        {
          allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
        }
      </div>
      <div className="col-span-3">
        <SocialLogin></SocialLogin>
      </div>

    </div>
  );
}
