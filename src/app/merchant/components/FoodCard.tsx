function FoodCard() {
    return (
        <div className="flex w-full bg-gray-50 p-4 rounded-lg justify-between items-center gap-4">
            <div className="w-1/6">
                <div className="w-8 h-8 bg-blue-500" />
            </div>
            <div className="w-5/6">
                <div className="flex">
                    <div className="flex items-center justify-between w-full">
                        <p className="font-medium text-lg">Nasi Campur</p>
                        <p className="text-primary text-xl font-semibold">Rp70.000</p>
                    </div>
                </div>
                <div className="flex justify-between text-gray-400">
                    <p>7 Bungkus</p>
                    <p>batch 1</p>
                </div>
            </div>
        </div>
    )
}

export default FoodCard