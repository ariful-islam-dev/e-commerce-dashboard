
const productHead = [
    'Product Name',
    'Category',
    'Price',
    'Sold',
    'Profit'
]

const products = [
    {
        image: '',
        name: "Apple Watch Series 7",
        category: 'Electronics',
        price: 296,
        quantity: 22,
        profit: 45
    },
    {
        image: '',
        name: "Macbook Pro M2",
        category: 'Electronics',
        price: 765,
        quantity: 5,
        profit: 160
    },
    {
        image: '',
        name: "Dell Inspiron 15 5593",
        category: 'Electronics',
        price: 445,
        quantity: 44,
        profit: 134
    },
    {
        image: '',
        name: "HP Probook 450",
        category: 'Electronics',
        price: 499,
        quantity: 72,
        profit: 103
    },
]
const TableTwo = () => {
    return (
        <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4 py-6 md:px-6 xl:px7 5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Top Products
                </h4>
            </div>
            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                {
                    productHead.map((name, key) => {
                        return (
                            <div className={`flex items-center ${(key === 0 && 'col-span-3') || (key === 1 && 'col-span-2') || ('col-span-1')}`} key={key}>
                                <p className="font-medium">{name}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                products.map((product, key) => (
                    <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5" key={key}>
                        <div className="flex items-center col-span-3">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="h-12.5 w-15 rounded-md">
                                    <img src={product.image} alt="Product" />
                                </div>
                                <p className="text-sm text-black dark:text-white">{product.name}</p>
                            </div>
                        </div>
                        <div className="items-center hidden col-span-2 sm:flex">
                            <p className="text-sm text-black dark:text-white">{product.category}</p>
                        </div>
                        <div className="items-center hidden col-span-1 sm:flex">
                            <p className="text-sm text-black dark:text-white">${product.price}</p>
                        </div>
                        <div className="items-center hidden col-span-1 sm:flex">
                            <p className="text-sm text-black dark:text-white">{product.quantity}</p>
                        </div><div className="items-center hidden col-span-1 sm:flex">
                            <p className="text-sm text-meta-3 dark:text-white">${product.profit}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TableTwo;