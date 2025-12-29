import ImageGallery from './_components/image-gallery';
import Link from 'next/link';

export default async function Page() {


  return (
    <div className="">
      <main className="flex flex-col items-center bg-orange-400 text-black">        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">Welcome to Ichiraku Ramen!</h2>
        <p className="text-lg mb-6 px-4">
          Experience the authentic taste of Japan right here at Ichiraku Ramen. Our chefs use traditional recipes and fresh ingredients to bring you the best ramen in town. Whether you're craving a hearty bowl of miso ramen or a light shoyu ramen, we have something for everyone.
        </p>
        <Link className='' href="/menu" title="Explore Our Menu">
          <button className="w-full bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Explore Our Menu
          </button>
        </Link>
        {<ImageGallery/>}
      </main>
    </div>
  );
}