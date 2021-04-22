import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// Import component styles
import {
  SliderContainer,
  SliderTitle,
  Card,
  Image,
  Icons,
  Icon,
  Info,
  Description,
  Category,
  Weigth,
  Title,
  Price,
  GoCart,
  Tooltip,
} from "./styles";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const Slider = () => {
  
  // API to get products
  const API = `https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json`;
  // state to store the products
  const [product, setProduct] = useState([]);
  // use the context app
  const {state, addToCart} = useContext(AppContext)
  
  // get products
  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => setProduct(data));
  }, []);
  
  // function for add products to cart
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <SliderContainer>
      <SliderTitle>
        <h2>Nuevo en superFuds</h2>
        <a href="" target="_blank" rel="noopener noreferrer">ver mas</a>
      </SliderTitle>
      <Swiper
        spaceBetween={30}
        breakpoints={
           {
             320: {
              slidesPerView: 1.2,
              spaceBetween: 20
            },
             768: {
              slidesPerView: 3.3,
              spaceBetween: 20
            },
             992: {
              slidesPerView: 4.3,
              spaceBetween: 20
            },
             1200: {
              slidesPerView: 5.2,
              spaceBetween: 20
            },
            }
        }
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop
      >
        {product.map((item) => (
          <SwiperSlide key={item.id}>
            <Card>
              <Image>
                <img src={item.thumbnail} alt="" />
                <Icons>
                {
                  item.sellos.map((sello, index)=>(
                  <Icon key={index}>
                    <img src={sello.image} alt="" />
                    <Tooltip className="tooltip">
                      <h3>producto</h3>
                      <p>{sello.name}</p>
                    </Tooltip>
                  </Icon>
                  ))
                }
                </Icons>
              </Image>
              <Info>
                <Description>
                  <Category>{item.category}</Category>
                  <Weigth>{item.net_content}</Weigth>
                </Description>
                <Title>{item.title}</Title>
                <Price>
                  <span>$</span>
                  {item.price_real}
                  <small> x {item.units_sf} unids</small>
                </Price>
              </Info>
              <GoCart className={"btn"} onClick={handleAddToCart(item)}>agregar al carrito</GoCart>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev prev" />
      <div className="swiper-button-next next" />
    </SliderContainer>
  );
};

export default Slider;