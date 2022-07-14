import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const arr = [
        {
            id: '1',
            name: 'Mr. Fan Shaohua',
            des: 'Fan was born in Guangzhou, China. He graduated from the Oil Painting Faculty of Guangzhou Academy of Fine Arts, China with a Bachelor Degree of Arts.  Fan has taught at the Oil Painting Faculty in South China University and the Art and Design Faculty Guangzhou University. In 1992, Fan moved to Singapore and worked at the Nanyang Academy of Fine Art. In the meantime, Fan’s work won the first prize in Singapore National Art Competition and is  a highly regarded Chinese artist in the Asian art world.'
        },
        {
            id: '2',
            name: 'Mr. Cephas Wong',
            des: 'The expertise of Mr., Cephas Wong’s creation on porcelain and ceramic is greatly unsurpassed. His skills in putting his artwork on the ceramic piece straight from out the furnace have made the visual delight to be so enthralling and vivid. Mr. Wong’s works have been collected by the China National Museum of Art in Beijing, the Tiananmen Administration, the Administration of Mao Zedong Memorial Hall, Singapore Embassy in China, Chinese Academy of Culture, the Appleton Museum (USA), the lake Eustis Museum of art, Lutheran Seminary St. Paul Minnesota USA and the Australian Art Museum. Moreover, his ceramic works have been collected by the Ceramic Museum of China Jiangxi Jingdezhen in 2005.'
        },
        {
            id: '3',
            name: 'Liang zhenkang',
            des: 'Mr. Liang Zhenkang is a contemporary artist in the theme of Nanyang origin. Liang is a very versatile calligrapher and artist. He is excellent in Chinese ink-painting featuring florals, birds and figures. His drawing for eagles is reputable and also very skillful in creating art using his nails and palms, releasing the unity of imaginations and reality into Oneness.'
        },
        {
            id: '4',
            name: 'Tan Ruirong',
            des: 'Mr. Tan Ruirong is a highly renowned artist in Singapore as a contemporary creator. Tan’s artworks have been exhibited in Singapore, China, South Korea, Hong Kong, Taiwan and other countries in solo exhibitions and tour shows. His paintings have been widely collected by collectors, business elites, famous entrepreneurs, Universities and professional institutions from all over the world. The greatest feature of the acrylic paintings created by Tan depicts the abstract and yet imaginable outlook, combining the beauty of Oriental and Western aura. This is innovative but yet creative in the expression, being favored by many collectors.'
        },
        {
            id: '5',
            name: 'Yang Changtai',
            des: 'Mr. Yang Changtai is a practical and contemporary calligrapher in Singapore. Yang has received various awards from Japan Oil Painting & Calligraphy Academy. He has held more than 70 exhibitions around the world among many cities while portraying his calligraphy in many solo and joint exhibitions'
        }
    ]
    const artist = arr.filter(item => item?.id == history?.location?.search?.split('=')[1]);
    return (
        <main className="bg-gray-900 mb-99 h-header">
                    <div className='flex flex-col h-header lg:flex-row items-center'>
                    <div className='w-full h-header-img bg-gray-900 bg-cover bg-top bg-no-repeat' style={{backgroundImage: 'url(/assets/bg-artist.jpg)'}}>
                    </div>
                        <div className='w-full mx-auto h-header flex flex-col justify-center px-34 py-42 lg:p-99' style={{backgroundImage: 'url(/assets/bg-header.png)'}}>
                            <h3 className="text-3xl font-semibold text-primary">{artist[0]?.name ? artist[0]?.name : 'THREE MUSKETEERS'}</h3>
                            <h5 className="text-md font-normal text-white pb-20 mb-12 border-b border-gray-500">Sydney NSW, Australia</h5>
                            <h3 className="text-3xl font-semibold text-white">Biography</h3>
                            <p className="mt-4 text-lg text-gray-300 pb-20 mb-12 border-b border-gray-500">
                                {artist[0]?.des ? artist[0]?.des :
                                    'Leonardo was born an illegitimate son of a Florentine noble and peasant woman; he grew up in Vinci, Italy. In his formative years, he developed a love of nature and from an early age began to display his remarkable academic and artistic talents. He also pioneered the use of Chiaroscuro; this is the technique of defining forms through the contrast of light and shadow.'}
                            </p>
                            <section className="flex items-center justify-end gap-10 mt-28">
                                <h5 className="text-md font-normal text-white">Follow Us :</h5>
                                <div className="flex items-center gap-3 text-22 text-white">
                                    <FaFacebookF className="cursor-pointer transition-all hover:text-gray-300" />
                                    <AiFillInstagram className="cursor-pointer text-26 mr-2 transition-all hover:text-gray-300" />
                                    <FaTwitter className="cursor-pointer transition-all hover:text-gray-300" />
                                </div>
                            </section>
                        </div>
                    </div>
        </main>
    )
}

export default Header;