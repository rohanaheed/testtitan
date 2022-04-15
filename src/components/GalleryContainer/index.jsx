import GalleryItem from './Item'

const GalleryContainer = () => {

    return (
        <section class="container mx-auto px-24 md:px-12 my-58">
            <div className='items-center flex flex-wrap mb-24'>
                <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
                    <h3 className="text-3xl font-semibold">Discover our Artworks</h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, id tenetur odio nihil quae eveniet consequatur eaque, itaque qui tempora. Ad dolorem nam fugit ea non, facere amet totam dolores eius.
                    </p>
                </div>
                <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>

                </div>
            </div>

            <div class="flex flex-wrap -mx-1 lg:-mx-4"
                style={{ paddingLeft: '6%', paddingRight: '6%' }}
            >

                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />
                <GalleryItem />

            </div>
        </section>
    )
}

export default GalleryContainer;