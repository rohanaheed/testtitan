import { Link } from 'react-router-dom'

const GalleryItem = ({ item }) => {
    return (
        <div className="cursor-pointer my-18 w-full md:w-1/2 lg:my-12 px-8 lg:w-1/3 nft-container">
            <Link to={`/nft-details/${item?._id}`}>
                <article className="card overflow-hidden rounded-lg shadow-lg">
                    <div className="img-container">
                        <a href="#">
                            <img alt="Placeholder" className="block h-auto w-full" src={item?.image ? item?.image : "https://picsum.photos/600/400/?random"} />
                        </a>
                    </div>
                    <footer className='py-18 px-6'>
                        <h6 className="mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900"> {item?.name} </h6>
                        <p className="text-lg leading-relaxed text-gray-700"> {item?.artistName} </p>
                        <p className="text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc">{item?.description} </p>
                    </footer>
                </article>
            </Link>
        </div>
    )
}

export default GalleryItem;