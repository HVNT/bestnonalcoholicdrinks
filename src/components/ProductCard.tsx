import React from 'react';

type ProductProps = {
  product: {
    rank: number;
    name: string;
    description: string;
    pros: string[];
    cons: string[];
    image?: string;
    url: string;
  };
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { rank, name, description, pros, cons, image, url } = product;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="bg-neutral-100 h-[180px] w-full flex items-center justify-center">
              {/* TODO: Replace with actual product image */}
              <span className="text-gray-400">Image coming soon</span>
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center mb-3">
            <span className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
              {rank}
            </span>
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-green-600 mb-2">Pros</h3>
              <ul className="list-disc pl-5 space-y-1">
                {pros.map((pro, index) => (
                  <li key={index} className="text-sm text-gray-600">{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-2">Cons</h3>
              <ul className="list-disc pl-5 space-y-1">
                {cons.map((con, index) => (
                  <li key={index} className="text-sm text-gray-600">{con}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Check Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;