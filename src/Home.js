import React from 'react'
import "./Home.css"
import Product from './Product.js'
import homeback from './images/homeback.jpg'
// import CarouselComponent from "./components/carousel.component";
// import './HomeCarousel.js';
// import './carousel.css';

export default function Home() {
  return (
    <div className="home">
        <div className="home__container">
            {/* <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/march2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Home Background Poster" /> */}
            {/* <img className='home__image' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='header logo'/> */}

            <img className='home__image' src="https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg" alt="" />
            {/* <img className='home__image' src={homeback} alt="" /> */}

            {/* day 3 homework 3.2 carousel slide show */}

            {/* <CarouselComponent /> */}
{/* 

            <div className="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img className='home__image' src="https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg" alt="" />
            </div>

            <div className="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img className='home__image' src="https://cdn.pixabay.com/photo/2021/10/04/06/28/cactus-6679665_960_720.jpg" alt="" />
            </div>

            <div className="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img className='home__image' src="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__180.jpg" alt="" />
            </div> */}

            {/* day 3 homework 3.2 */}


            <div className="home__row">
                <Product 
                    id={101}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_960_720.jpg"
                    rating={3} 
                />
                <Product 
                    id={102}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2018/05/11/08/11/pet-3389729_960_720.jpg"
                    rating={4} 
                />
            </div>

            <div className="home__row">
                <Product 
                    id={103}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2022/01/19/08/32/melons-6949139_960_720.jpg"
                    rating={5} 
                />
                <Product 
                    id={104}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2021/10/04/06/28/cactus-6679665_960_720.jpg"
                    rating={3} 
                />
                <Product 
                    id={105}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__180.jpg"
                    rating={4} 
                />
                <Product 
                    id={106}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__180.jpg"
                    rating={2} 
                />
            </div>

            <div className="home__row">
                <Product 
                    id={107}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__180.jpg"
                    rating={3} 
                />
                <Product 
                    id={108}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__180.jpg"
                    rating={2} 
                />
                <Product 
                    id={109}
                    title="The lean startup"
                    price={29.99} 
                    image="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19831__180.jpg"
                    rating={5} 
                />
            </div>

        </div>
    </div>
  )
}
