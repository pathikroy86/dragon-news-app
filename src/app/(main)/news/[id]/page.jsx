import { fetchNewsDetails } from "@/lib/datafetch";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const data = await fetchNewsDetails(id);
    console.log(data)
    return (
        <div className="w-11/12 md:w-10-12">

        </div>
    );
};

export default DetailsPage;