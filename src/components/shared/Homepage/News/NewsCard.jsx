import Image from 'next/image';
import { FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news, className = '' }) => {
    const { title, author, thumbnail_url, image_url, details, total_view, rating } = news;
    const image = image_url || thumbnail_url;

    return (
        <article className={`bg-base-200 mb-4 ${className}`}>
            <div className='space-y-3'>
                <div className='flex justify-between items-center bg-base-300 w-full px-4 py-2'>
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
                    <div className='flex gap-2'>
                        <FaRegBookmark />
                        <IoMdShare />
                    </div>
                </div>

                <h2 className='text-xl font-bold text-[#403F3F] px-4'>{title}</h2>
                {
                    image && <Image
                        className='w-full object-cover px-4'
                        src={image}
                        width={600}
                        height={320}
                        alt={title}
                    />
                }
                <p className='text-[#706F6F] px-4'>{details?.slice(0, 180)}...<button className='text-[#FF8C47] font-semibold'>Read More</button></p>

                <div className='flex justify-between text-sm text-gray-500 px-4'>
                    <span>Rating: {rating?.number ?? 'N/A'}</span>
                    <span>Views: {total_view ?? 0}</span>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;
