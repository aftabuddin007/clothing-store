import products from "@/data/products.json";
import Image from "next/image";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return notFound();
  }

  const {
    name,
    category,
    image,
    price,
    rating,
    colors,
    sizes,
    inStock,
    description,
  } = product;

  return (
    <div className="min-h-screen  py-12 px-4">

      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}

        <div className="mb-8 text-sm text-gray-500">
          Home / Products /{" "}
          <span className="font-semibold text-[#14532D]">
            {name}
          </span>
        </div>

        {/* Main Section */}

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="rounded-3xl bg-white p-6 shadow-xl">

            <Image
              src={image}
              alt={name}
              width={700}
              height={700}
              className="h-[650px] w-full rounded-3xl object-cover"
            />

          </div>

          {/* RIGHT SIDE */}

          <div className="flex flex-col justify-center">

            {/* Category */}

            <span className="mb-4 w-fit rounded-full bg-[#14532D] px-4 py-2 text-sm font-semibold text-white">
              {category}
            </span>

            {/* Title */}

            <h1 className="text-4xl font-bold text-[#14532D] lg:text-5xl">
              {name}
            </h1>

            {/* Rating */}

            <div className="mt-5 flex items-center gap-2">

              <FaStar className="text-yellow-400" />

              <span className="font-semibold">
                {rating}
              </span>

              <span className="text-gray-500">
                (128 Reviews)
              </span>

            </div>

            {/* Price */}

            <div className="mt-6">

              <h2 className="text-4xl font-bold text-[#14532D]">
                ৳ {price}
              </h2>

              <p className="mt-1 text-sm text-green-600">
                Inclusive of all taxes
              </p>

            </div>

            {/* Description */}

            <p className="mt-8 leading-relaxed text-gray-700">
              {description}
            </p>

            {/* Colors */}

            <div className="mt-10">

              <h3 className="mb-4 text-xl font-semibold text-[#14532D]">
                Available Colors
              </h3>

              <div className="flex flex-wrap gap-3">

                {colors.map((color, index) => (
                  <button
                    key={index}
                    className="rounded-full border border-[#14532D] px-5 py-2 font-medium transition hover:bg-[#14532D] hover:text-white"
                  >
                    {color}
                  </button>
                ))}

              </div>

            </div>

            {/* Sizes */}

            <div className="mt-10">

              <h3 className="mb-4 text-xl font-semibold text-[#14532D]">
                Available Sizes
              </h3>

              <div className="flex flex-wrap gap-3">

                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className="rounded-xl border border-gray-300 px-5 py-3 font-semibold transition hover:border-[#14532D] hover:text-[#14532D]"
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* Quantity */}

            <div className="mt-10">

              <h3 className="mb-4 text-xl font-semibold text-[#14532D]">
                Quantity
              </h3>

              <div className="flex w-fit items-center gap-6 rounded-xl border  px-6 py-3 shadow-sm">

                <button className="text-xl font-bold">
                  -
                </button>

                <span className="font-semibold">
                  1
                </span>

                <button className="text-xl font-bold">
                  +
                </button>

              </div>

            </div>

            {/* Stock */}

            <div className="mt-8">

              <span
                className={`rounded-full px-5 py-2 font-semibold ${
                  inStock
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {inStock
                  ? "In Stock"
                  : "Out Of Stock"}
              </span>

            </div>

            {/* Shipping Information */}

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-md">

              <div className="space-y-3 text-gray-700">

                <p>🚚 Free Delivery Nationwide</p>

                <p>💰 Cash On Delivery Available</p>

                <p>🔄 7 Days Easy Return</p>

                <p>✔ 100% Authentic Product</p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="flex-1 rounded-xl bg-[#14532D] py-4 font-semibold text-white transition hover:brightness-110">
                Buy Now
              </button>

             
<AddToCartButton product={product} />
               

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;