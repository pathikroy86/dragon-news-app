import React from 'react';

export const metadata = {
    title: "Dragon News-career",
    description: "Best news portal in Bangladesh",
};

const CareerPage = () => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerPage;