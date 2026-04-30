export const fetchCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const response = res.json();
    return response;
}

const dedupeNews = (newsList) => {
    if (!Array.isArray(newsList)) return [];

    const seen = new Set();
    return newsList.filter((item) => {
        if (!item) return false;

        const title = item.title?.toString().trim().toLowerCase();
        const author = item.author?.name?.toString().trim().toLowerCase();
        const date = item.author?.published_date?.toString().trim();

        const fingerprint = title || `${author}|${date}`;
        if (!fingerprint) return false;

        if (seen.has(fingerprint)) return false;
        seen.add(fingerprint);

        return true;
    });
};

export const fetchCategoryData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const news = await res.json();
    news.data = dedupeNews(news.data);
    return news;
}


export const fetchAllNewsData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/08')
    const news = await res.json();
    news.data = dedupeNews(news.data);
    return news;
}

export const fetchNewsDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const news = await res.json();
    return news.data[0];
}
