import styled from "styled-components";
import down from "../../assets/images/down-arrow.svg";
import left from "../../assets/images/left-arrow.svg";



export const HeaderContainer = styled.header`
  background-color: var(--brand);
`;


export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 20px 25px;

  @media (min-width: 992px) {
  padding: 25px 100px 35px;
  }
`;


export const Icon = styled.a`
  width: 90%;

  & img {
    width: 150px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
  width: 28%;
    & img {
      width: 180px;
    }
  }

  @media (min-width: 992px) {
    & img {
      width: 200px;
    }
  }
`;


export const Search = styled.div`
  position: relative;
  display: none;
  border-radius: 25px;
  height: 35px;
  padding: 10px 20px;
  background-color: var(--white);

  & input[type="text"] {
    border-radius: 25px;
    width: 100%;
    height: 100%;
    border: none;
    appearance: none;
    outline: none;
    font-size: 1.2rem;
  }

  & button {
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 20px;
    background-color: transparent;
    border: none;
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 768px) {
    display: block;
    width: 30%;
  }

  @media (min-width: 992px) {
    width: 40%;
  }
`;

export const Car = styled.button`
  width: 10%;
  text-align: center;
  border:none;
  display:flex;
  justify-content:center;
  background-color:transparent;
  cursor: pointer;
  outline:none;

  & img {
    width: 30px;
    object-fit: contain;
  }

  & .car-alert{
    background-color:var(--white);
    border-radius:50%;
    padding:5px;
    width:20px;
    height:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:700;
    font-size:1.2rem;
    color:var(--black)
  }
`;


export const User = styled.div`
  width: 18%;
  display: flex;
  align-items: center;
  text-align: right;

  & h2 {
    display: none;
    color: var(--white);
    margin: 0;
    padding-bottom: 5px;
  }

  & a {
    text-decoration: none;
    display: none;
    color: #000;
    padding-right: 25px;
    position: relative;
    font-size: 1.2rem;
    font-weight: 600;
    &:after {
      content: "";
      background-image: url(${down});
      width: 14px;
      position: absolute;
      right: 0;
      height: 23px;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  @media (min-width: 768px) {
    width: 30%;
    & a,
    & h2 {
      display: block;
    }
  }
  @media (min-width: 992px) {
    width: 20%;
  }
`;


export const AvatarContainer = styled.figure`
  width: 40px;
  margin:0;
  margin-left: 15px;

  & img {
    width: 100%;
  }

  @media (min-width: 992px) {
    margin-left: 20px;
    margin-top: 0;
    width: 20%;
  }
`;


export const Pushbar = styled.div`
  display: none;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  transition:.3s ease;
  bottom: 0;
  width: 100vw;
  height:100vh;
  overflow:hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  justify-content: flex-end;
`;


export const PushbarContent = styled.div`
  width: 80%;
  height: 100%;
  overflow-y: scroll;
  background-color: #f2f2f2;
  padding: 80px 15px;

  @media (min-width: 768px) {
  padding: 80px 50px;
  }
`;


export const GoBack = styled.button`
  color: var(--grey);
  font-size: 1.6rem;
  background-color:transparent;
  border:none;
  position: relative;
  margin-left: 14px;
  outline:none;
  cursor: pointer;
  &::before {
    content:'';
    background-image: url(${left});
    width: 14px;
    position: absolute;
    right: 100%;
    top:70%;
    transform:translateY(-50%);
    height: 23px;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;


export const CarTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    font-size: 2.4rem;
  }

  & small {
    font-size: 1.8rem;
    font-weight: 700;
    & span {
      color: var(--brand);
    }
  }

  @media (min-width: 768px) {
    & h2 {
      font-size: 4.2rem;
    }
  }
`;


export const CarColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  & h3 {
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    & h3 {
      font-size: 2.2rem;
    }
  }
`;


export const CarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const CarProduct = styled.div`
  display: flex;
  align-items: center;
  width:30%;
  margin-bottom:40px ;
`;


export const CarProductImg = styled.div`
  height: 100px;
  min-width: 100px;
  display:none;

  & img {
    height: 100%;
    width: 100px;
    object-fit: contain;
  }

  @media (min-width: 992px) {
    display:block;
  }
`;


export const CarProductInfo = styled.div`
  margin-left: 0px;

  & h4 {
    font-size: 1rem;
    padding-bottom: 5px;
    margin: 0;
  }

  & small {
    font-size: .8rem;
    color: var(--grey);
  }

  & p {
    display:none;
    color: var(--brand);
    font-size: 1.7rem;
    margin: 0;
    padding-top: 10px;
  }

  @media (min-width: 768px) {
    & h4 {
      font-size: 2rem;
    }
    & small {
      font-size: 1.3rem;
    }
    & p {
      display: block;
    }
  }

  @media (min-width: 992px) {
  margin-left: 30px;
  }
`;


export const Quantity = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1rem;
    width: 20px;
    height: 20px;
    color: var(--brand);
    border: 1px solid var(--brand);
    outline: none;
    cursor: pointer;
    &.disabled {
      pointer-events: none;
      user-select: none;
      filter: grayscale(100%);
    }
  }

  & p {
    font-size: 1rem;
    padding: 0 5px;
  }

  @media (min-width: 768px) {
    & p {
      padding: 0 20px;
      font-size: 1.7rem;
    }
    & button {
      width: 40px;
      height: 40px;
      font-size: 3rem;
    }
  }
`;


export const Price = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;

  & h2 {
    font-size: 1rem;
    & span {
      color: var(--brand);
    }
  }

  @media (min-width: 768px) {
  justify-content: flex-end;
    & h2 {
      font-size: 2.5rem;
    }
  }
`;


export const Delete = styled.div`
  display: flex;
  width: 10%;
  justify-content:flex-end;

  & button{
    background-color:none;
    border:none;
    cursor: pointer;
    outline:none;
  }

  & img{
    width:20px;
  }
`;