import Image from 'next/image';

const NewsCard = ({ news, className = '' }) => {
    const { title, author, thumbnail_url, image_url, details, total_view, rating } = news;
    const image = image_url || thumbnail_url;

    return (
        <article className={`bg-base-200 p-4 mb-4 ${className}`}>
            <div className='space-y-3'>
                <div className='flex gap-2 items-center'>
                    <figure>
                        {
                            author?.img && <Image
                                className='rounded-full'
                                src={author.img}
                                width={40}
                                height={40}
                                alt={author?.name ? `${author.name} image` : 'author image'}
                            />
                        }
                    </figure>
                    <div>
                        <h6 className='font-semibold'>{author?.name}</h6>
                        <p className='text-sm text-gray-500'>{author?.published_date}</p>
                    </div>
                </div>
                <h2 className='text-xl font-bold text-[#403F3F]'>{title}</h2>
                {
                    image && <Image
                        className='w-full object-cover'
                        src={image}
                        width={600}
                        height={320}
                        alt={title}
                    />
                }
                <p className='text-[#706F6F]'>{details?.slice(0, 180)}...</p>
                <div className='flex justify-between text-sm text-gray-500'>
                    <span>Rating: {rating?.number ?? 'N/A'}</span>
                    <span>Views: {total_view ?? 0}</span>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;
