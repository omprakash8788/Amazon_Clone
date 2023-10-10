import React, { useEffect } from "react";
import "./Home.css";
import Products from "../products/Products";
const Home = () => {
  useEffect(()=>Slider(0),[])
  return (
    <>
      <div className="home">
        <div className="homeContainer">
          <div className="homeSliderContainer">
            <div className="homeSliders">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/GW/ATF/3000x1200_1._CB577358695_.jpg"
                alt="img"
              />
            </div>

            <div className="homeSliders">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/GW/Uber/D98467701_PC_Hero_3000x1200._CB575872300_.jpg"
                alt="img"
              />
            </div>

            <div className="homeSliders">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/desktop/Non_Pea_Unrec_Phase_1_Tallhero_3000x1200._CB577613664_.jpg"
                alt="img"
              />
            </div>

            <div className="homeSliders">
              <img
                className="homeImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/2023/Auto/Jupiter/GW/D2_New/3000x1200._CB575716847_.jpg"
                alt="img"
              />
            </div>
          </div>
          {/* How Row */}
          <div className="HomeRow">
            <Products 
            title='Phone' price={100} image='https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY400_.jpg'
            />
            <Products 
            title='Digital - Watch' price={59} image='https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_SY400_.jpg'
            />
             <Products 
            title='WireLess EarPhone' price={79} image='https://m.media-amazon.com/images/I/31hXqtvutdL._AC_SY400_.jpg'
            />  
           <Products 
            title='Mack-Book' price={799} image='https://m.media-amazon.com/images/I/41a4-vgETkL._AC_SY400_.jpg'
            />
          </div>
           
           {/* second Row */}
           <div className="HomeRow">
            <Products 
            title='Nokia-677' price={399} image='https://m.media-amazon.com/images/I/41X5xIsmcoL._AC_SY400_.jpg'
            />
            <Products 
            title='Phone' price={299} image='https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_UL480_FMwebp_QL65_.jpg'
            />
              <Products 
            title='RealMe' price={499} image='https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UL480_FMwebp_QL65_.jpg'
            />
           
          </div>

          {/* Third Row */}
           <div className="HomeRow">
            <Products 
            title='Mackbook 123' price={799} image='https://m.media-amazon.com/images/I/51ZpF7hDnvL._AC_UY327_FMwebp_QL65_.jpg'
            />
            <Products 
            title='Acer' price={390} image='https://m.media-amazon.com/images/I/71czGb00k5L._AC_UY327_FMwebp_QL65_.jpg'
            />
              <Products 
            title='ASUS' price={459} image='https://m.media-amazon.com/images/I/711STEpA3IL._AC_UY327_FMwebp_QL65_.jpg'
            />
            <Products 
            title='H/P' price={455} image='https://m.media-amazon.com/images/I/711QVhwvPWL._AC_UY327_FMwebp_QL65_.jpg'
            />
           
          </div>

          {/* Fourth Row */}
          <div className="HomeRow">
            <Products 
            title='Apple 15c' price={999} image='https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg'
            />
            <Products 
            title='Apple 14 Pro' price={1100} image='https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_UY327_FMwebp_QL65_.jpg'
            />
              <Products 
            title='Apple 13 Pro' price={499} image='https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY327_FMwebp_QL65_.jpg'
            />
            <Products 
            title='Apple 13' price={491} image='https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg'
            />
           
          </div>

        </div>
      </div>
    </>
  );
};

// For the slider
function Slider(counter){
  const Slides = document.querySelectorAll('.homeImg')
  Slides.forEach((slide, index)=>{
    if(index!==counter){
      slide.style.visibility =`hidden`;
      slide.classList.add(`image-${index}`)

    }
  })
  moveCarousal(counter, Slides, Slides.length)
}
function moveCarousal(counter, Slides, len){
  if(Slides){
    if(counter>=len-1){
      counter=0
    }
    else{
      counter+=1;
    }
    Slides.forEach((slide, index)=>{
      if(index===counter){
        slide.style.visibility=`visible`
      }
      else{
        slide.style.visibility=`hidden`
          
      }
    })
  }

  setTimeout(()=>{
   moveCarousal(counter, Slides, len)
  },4000)

}

export default Home;
