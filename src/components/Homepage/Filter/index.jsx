import MultiRangeSlider from "../MultiRangeSlider";

const Filter = () => {

  return (
    <div className="w-full h-full px-24 bg-filter filter-section overflow-y-auto">
      <div>
        <h3 className="text-md font-medium text-white text-center py-28 border-b border-gray-500">FILTERS </h3>
      </div>
      <div className="text-white">
        <h3 className="text-md font-medium text-white pt-24 pb-18" >CATEGORY</h3>
        <div className="">
          <input className="mr-12" type="radio" id="masters" name="fav_language" value="HTML" />
          <label for="masters">Fine Art</label> <br />
          <input className="mr-12" type="radio" id="contemporary" name="fav_language" value="CSS" />
          <label for="css">Contemporary Art</label> <br />
          <input className="mr-12" type="radio" id="antiques" name="fav_language" value="JavaScript" />
          <label for="javascript">Antiques</label> <br />
          <input className="mr-12" type="radio" id="precious-gems" name="fav_language" value="precious-gems" />
          <label for="masters">Precious Gems</label> <br />
        </div>
      </div>

      <div className="border-t mt-28 border-gray-500 text-white">
        <h3 className="text-md font-medium  pt-24 pb-18">MEDIUM </h3>
        <div className="">
          <input className="mr-12" type="radio" id="painting" name="fav_languagse" value="HTML" />
          <label for="masters">Painting</label> <br />
          <input className="mr-12" type="radio" id="photography" name="fav_languagse" value="CSS" />
          <label for="css">Photography</label> <br />
          <input className="mr-12" type="radio" id="mixed-media" name="fav_languagse" value="mixed-media" />
          <label for="mixed-media">Mixed Media</label> <br />
          <input className="mr-12" type="radio" id="drawing" name="fav_languagse" value="precious-gems" />
          <label for="masters">Drawing</label> <br />
          <input className="mr-12" type="radio" id="digital-creation" name="fav_languagse" value="digital-creation" />
          <label for="css">Digital Media</label> <br />
        </div>
      </div>


      <div className="border-t mt-20 border-gray-500">
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