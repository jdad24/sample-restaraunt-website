import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full h-2/14 bg-black opacity-80">
            <h1 className="relative text-center w-6/8 left-1/8 text-orange-400 text-3xl font-bold border-b-1 py-4">Ichiraku Ramen</h1>
            <div className="flex flex-row justify-center items-center">
                <Link href="/" title="Home">
                    <Button title="Home" />
                </Link>
                <Link href="/menu" title="Menu">
                    <Button title="Menu" />
                </Link>
                <Link  href="https://www.opentable.com/" title="Reserve" target="_blank" rel="noopener noreferrer">
                    <Button title="Reserve" />
                </Link>
            </div>
        </nav>
    );
}

function Button({ title }: { title?: string }) {
    return (
        <button className="hover:border-b-2 hover:border-orange-400 bg-transparent hover:text-blue-400 text-white font-bold px-4 mx-2 my-2 rounded cursor-pointer">
            {title}
        </button>
    )
}