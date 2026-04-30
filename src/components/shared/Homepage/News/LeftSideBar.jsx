"use client"

import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {

    return (
        <div>
            <h3 className="text-[#403F3F] text-xl font-semibold mb-2">All Category</h3>
            <div>
                <ul className="menu p-5 bg-base-200 w-full space-y-5">
                    {
                        categories.map(category => <li key={category.category_id} className={`${category.category_id === activeId && 'bg-base-700 text-base-500 font-semibold'} `}><Link className="block" href={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default LeftSideBar;
