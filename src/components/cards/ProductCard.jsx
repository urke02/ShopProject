function ProductCard({ product }) {
  const { name, description, image } = product;
  const { alt, src } = image;

  return (
    <div className="border border-zinc-200 overflow-hidden rounded-md flex flex-col">
      <div className="aspect-video bg-zinc-200">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>

      <div className="p-4 gap-4 flex flex-col justify-between flex-1">
        <div className="shrink-0">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p>{description}</p>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

function AddToCartButton({ product }) {
  return (
    <button
      type="button"
      className="bg-purple-700 hover:bg-purple-600 text-white p-1 rounded-md"
      onClick={() => console.log("Add to cart", product)}
    >
      Add to Cart
    </button>
  );
}

export { ProductCard };
