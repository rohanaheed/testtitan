import { Link } from 'react-router-dom'

const GalleryItem = ({ item }) => {
    console.log(item, "data")

    return (
        <div className="cursor-pointer my-18 w-full md:w-1/2 lg:my-12 px-8 lg:w-1/3">
            <Link to="/art">
                <article className="card overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src={item?.image ? item?.image : "https://picsum.photos/600/400/?random"} />
                    </a>
                    <footer className='py-18 px-6'>
                        <h6 className="mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900"> {item?.name} </h6>
                        <p className="text-lg leading-relaxed text-gray-700"> {item?.artistName} </p>
                        <p className="text-lg leading-relaxed text-gray-500 mb-6 font-bold">{item?.description} </p>
                    </footer>
                </article>
            </Link>
        </div>
    )
}

export default GalleryItem;