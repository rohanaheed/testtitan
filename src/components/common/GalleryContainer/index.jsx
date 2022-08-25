import GalleryItem from './Item'

const GalleryContainer = ({ children, data, loading }) => {
    return (
        <section class="container mx-auto px-24 md:px-12 mb-58">
            <div className='items-center flex flex-wrap mb-24'>
                <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
                    {children}
                </div>
                <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
                </div>
            </div>
            <div class="flex flex-wrap px--6"
            >
                {!loading ? data?.map(item => (
                    <GalleryItem item={item} />
                )) :
                    <div className='centered'>
                        <div class="loader"></div>
                    </div>
                }
            </div>
        </section>
    )
}

export default GalleryContainer;