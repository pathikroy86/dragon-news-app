import SocialLogin from "@/components/shared/Homepage/News/SocialLogin";
import { fetchCategoryData, fetchNewsDetails } from "@/lib/datafetch";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const categoryres = await fetchNewsDetails(id);
    return {
        title: categoryres.title,
    }
}

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const data = await fetchNewsDetails(id);

    return (
        <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-12 gap-5">
            <div className="col-span-9">
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image
                            src={data.image_url}
                            alt={data.title}
                            width={800}
                            height={600}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <p>{data.details}</p>
                        <div className="card-actions justify-start">
                            <Link href={`/category/${data.category_id}`}><button className="btn btn-error"><FaArrowLeft /> All news in this category</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default DetailsPage;