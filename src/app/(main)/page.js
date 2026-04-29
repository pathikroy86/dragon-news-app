import LeftSideBar from "@/components/shared/Homepage/News/LeftSideBar";

const fetchCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const response = res.json();
  return response;
}

export default async function Home() {
  const { data } = await fetchCategories();
  const categories = data.news_category;

  return (
    <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="col-span-6">
        All news
      </div>
      <div className="col-span-3">
        Social Icons
      </div>

    </div>
  );
}
