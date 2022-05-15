import MultiRangeSlider from "../MultiRangeSlider";

const Filter = () => {

    return (
        <div className="w-full px-24 bg-gray-800 pb-42">
        <div>
            <h3 className="text-md font-medium text-white text-center py-28 border-b border-gray-500">FILTERS </h3>
          </div>
          <div>
            <h3 className="text-md font-medium text-white pt-24 pb-18">CATEGORY </h3>
            <div className="text-white ">
             <input className="mr-12" type="radio" id="masters" name="fav_language" value="HTML" />
             <label for="masters">masters</label> <br/>
             <input className="mr-12" type="radio" id="contemporary" name="fav_language" value="CSS" />
             <label for="css">contemporary</label> <br/>
             <input className="mr-12" type="radio" id="antiques" name="fav_language" value="JavaScript" />
             <label for="javascript">antiques</label> <br/>
             <input className="mr-12" type="radio" id="precious-gems" name="fav_language" value="precious-gems" />
             <label for="masters">precious gems</label> <br/>
             <input className="mr-12" type="radio" id="music-creations" name="fav_language" value="music-creations" />
             <label for="css">music creations</label> <br/>
             </div>
          </div>

          <div className="border-t mt-28 border-gray-600">
            <h3 className="text-md font-medium text-white pt-24 pb-18">MEDIUM </h3>
            <div className="text-white ">
             <input className="mr-12" type="radio" id="painting" name="fav_languagse" value="HTML" />
             <label for="masters">painting</label> <br/>
             <input className="mr-12" type="radio" id="photography" name="fav_languagse" value="CSS" />
             <label for="css">photography</label> <br/>
             <input className="mr-12" type="radio" id="mixed-media" name="fav_languages" value="JavaScript" />
             <label for="javascript">mixed-media</label> <br/>
             <input className="mr-12" type="radio" id="drawing" name="fav_languagse" value="precious-gems" />
             <label for="masters">drawing</label> <br/>
             <input className="mr-12" type="radio" id="digital-creation" name="fav_languagse" value="digital-creation" />
             <label for="css">digital creation</label> <br/>
             </div>
          </div>


          <div className="border-t mt-20 border-gray-600">
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
            </div>
        </div>
    )
}

export default Filter;