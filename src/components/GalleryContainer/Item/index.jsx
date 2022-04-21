const GalleryItem = () => {

    return (

        <div className="cursor-pointer my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
            <article className="card overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>
                <footer className='py-18 px-12'>
                    <h6 className="mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900"> “Fat Patriot” Artwork by John </h6>
                    <p className="text-lg leading-relaxed text-gray-500 pl-4 font-bold"> $ 25, 000 </p>
                </footer>
            </article>
        </div>

    )
}

export default GalleryItem;