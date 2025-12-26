import MenuCard from "../_components/menu-card";

export default async function Page() {
    return (
        <div className='lg:min-h-145'>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">Our Menu</h2>
            <p className="text-lg mb-6 px-4 text-center">
                Explore our diverse menu featuring a variety of ramen bowls, appetizers, and drinks. Each dish is crafted with care to ensure an authentic Japanese dining experience.
            </p>
            <MenuCard/>
            {/* <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                View Full Menu
            </button> */}
        </div>
    )
}