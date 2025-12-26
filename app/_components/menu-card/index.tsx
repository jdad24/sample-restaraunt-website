export default function MenuCard() {
    return (
        <div className="bg-orange-400 text-black h-70 mx-70 justify-items-center rounded-lg shadow-lg p-6 grid grid-cols-3 gap-4">
            <div>
                <div className="text-3xl font-bold">Appetizers</div>
                <div>Gyoza (6 pcs): $5.99</div>
                <div>Edamame: $3.99</div>
                <div>Seaweed Salad: $4.99</div>
            </div>
            <div>
                <div className="text-3xl font-bold">Main Dishes</div>
                <div>
                    <div className="font-bold">Ramen Bowls</div>
                    <div>Tonkotsu Ramen: $13.99</div>
                    <div>Miso Ramen: $13.99</div>
                    <div>Shoyu Ramen: $13.99</div>
                </div>
                <div>
                    <div className="font-bold mt-4">Extras</div>
                    <div>Extra Noodles: $2.00</div>
                    <div>Extra Chashu: $3.00</div>
                    <div>Soft Boiled Egg: $1.50</div>
                </div>
                <div>
                    <div className="font-bold mt-4">Specials</div>
                    <div>Chashu Don: $9.99</div>
                    <div>Curry Rice: $10.99</div>
                </div>
                <div className="font-bold">Rice Bowls</div>
            </div>
            <div>
                <div className="text-3xl font-bold">Drinks</div>
                <div>Green Tea: $2.99</div>
                <div>Soda: $1.99</div>
                <div>Water: Free</div>
            </div>
        </div>
    )
}