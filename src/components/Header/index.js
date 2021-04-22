import React, {useState, useContext} from 'react';
import AppContext from "../../context/AppContext";

// import styles
import {
  HeaderContainer,
  Nav,
  Icon,
  Search,
  Car,
  User,
  AvatarContainer,
  Pushbar,
  PushbarContent,
  GoBack,
  CarTitle,
  CarColumn,
  CarItem,
  CarProduct,
  CarProductImg,
  CarProductInfo,
  Quantity,
  Price,
  Delete,
} from "./styles";

// import images
import Logo from '../../assets/images/logo-min.svg'
import Cart from '../../assets/images/cart.svg'
import Avatar from '../../assets/images/avatar.png'
import Trash from '../../assets/images/delete.svg'

const Header = () => {

  // state to open cart view
  const [carActive, setCarActive] = useState(false)
  
  // use context app
  const { state, removeFromCart, addToCart, removeItemFromCart } = useContext(AppContext);

  const { cart } = state;

  // remove product quantity to cart
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };
  
  // remove product item to cart
  const handleRemoveItem = (product) => () => {
    removeItemFromCart(product);
  };
  
  // add product item to cart
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Icon href="">
          <img src={Logo} alt="" />
        </Icon>
        <Search>
          <input type="text" placeholder="Busca marcas y productos..." />
          <button type="submit">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg svg-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0125 13.2078H14.0591L13.7279 12.8788C14.9434 11.4681 15.6116 9.66749 15.6107 7.80531C15.6107 6.7803 15.4088 5.76531 15.0165 4.81832C14.6243 3.87134 14.0493 3.01089 13.3245 2.2861C12.5997 1.56131 11.7393 0.986376 10.7923 0.59412C9.84533 0.201865 8.83035 0 7.80534 0C5.73524 0 3.74992 0.822313 2.28614 2.2861C0.822356 3.74989 0 5.7352 0 7.80531C0 9.87542 0.822356 11.8607 2.28614 13.3245C3.74992 14.7883 5.73524 15.6107 7.80534 15.6107C9.66687 15.6121 11.4671 14.945 12.8781 13.7308L13.2093 14.0598V15.0081L19.2099 21L21 19.2099L15.0118 13.2071L15.0125 13.2078ZM7.80681 13.2078C7.09719 13.2084 6.39441 13.069 5.7387 12.7977C5.08298 12.5264 4.48719 12.1285 3.98542 11.6268C3.48364 11.125 3.0857 10.5291 2.81441 9.87342C2.54311 9.21771 2.40377 8.51493 2.40435 7.80531C2.40435 6.37249 2.97355 4.99836 3.98671 3.9852C4.99986 2.97204 6.37399 2.40284 7.80681 2.40284C9.23957 2.40303 10.6136 2.97235 11.6267 3.98547C12.6398 4.99859 13.2091 6.37255 13.2093 7.80531C13.2093 9.23813 12.6401 10.6123 11.6269 11.6254C10.6138 12.6386 9.23963 13.2078 7.80681 13.2078Z"
                fill="grey"
              ></path>
            </svg>
          </button>
        </Search>
        <Car
          onClick={() => {
            setCarActive(!carActive);
          }}
        >
          <img src={Cart} alt="" />
          {cart.length > 0 && <p className="car-alert">{cart.length}</p>}
        </Car>
        <User>
          <div>
            <h2>Saiby Alimentos</h2>
            <a href="">Mi perfil</a>
          </div>
          <AvatarContainer>
            <img src={Avatar} alt="" />
          </AvatarContainer>
        </User>
      </Nav>

      <Pushbar isActive={carActive}>
        <PushbarContent>
          <GoBack
            onClick={() => {
              setCarActive(!carActive);
            }}
          >
            volver a la tienda
          </GoBack>
          <CarTitle>
            <h2>Carrito de compras</h2>
            <small>
              <span>{cart.length} </span>items
            </small>
          </CarTitle>
          <CarColumn>
            <h3>item</h3>
            <h3>cantidad</h3>
            <h3>precio</h3>
          </CarColumn>
          {cart.map((item, index) => (
            <CarItem key={index}>
              <CarProduct>
                <CarProductImg>
                  <img src={item.thumbnail} alt={item.title} />
                </CarProductImg>
                <CarProductInfo>
                  <h4>{item.title}</h4>
                  <small>
                    x {item.units_sf} unids * {item.net_content} c/u
                  </small>
                  <p>{item.category}</p>
                </CarProductInfo>
              </CarProduct>
              <Quantity>
                <button
                  onClick={handleRemove(item)}
                  className={item.quantity == 1 ? "disabled" : ""}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button onClick={handleAddToCart(item)}>+</button>
              </Quantity>
              <Price>
                <h2>
                  <span>$ </span>
                  {item.price_real * item.quantity}
                </h2>
              </Price>
              <Delete>
                <button onClick={handleRemoveItem(item)}>
                  <img src={Trash} alt="borrar" />
                </button>
              </Delete>
            </CarItem>
          ))}
        </PushbarContent>
      </Pushbar>
    
    </HeaderContainer>
  );
};

export default Header;