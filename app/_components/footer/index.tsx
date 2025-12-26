export function Footer() {
    return (
        <footer className="relative w-full h-auto mt-5 h-1/8 bg-black flex flex-col justify-center items-center opacity-80">
            <div className="flex flex-row lg:gap-50 mb-4">
                <div>
                    <h2 className="text-white text-lg font-bold">Location</h2>
                    <div className="text-white text-sm">123 Ramen St, Konoha, Texas</div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-bold">Hours</h2>
                    <div className="text-white text-sm">Open Daily: 11am - 10pm</div>
                </div>
            </div>
            <p className="text-white text-sm">© 2025 Ichiraku. All rights reserved.</p>
        </footer>
    );
}

export default Footer;