import React from 'react'
import './ListProduct.css'
import Products from '../products/Products'
const ListProduct = () => {
  return (
    <> 
    <div>
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
       
    </>
  )
}

export default ListProduct
