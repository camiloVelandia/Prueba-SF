import styled from "styled-components";


export const SliderContainer = styled.section`
  max-width: 1330px;
  padding-left: 38px;
  padding-right: 38px;
  margin: 0 auto;
  margin-top: 90px;
  position: relative;

  & .next::after {
    color: var(--brand);
    font-size: 2.4rem;
    font-weight: 700;
  }

  & > .prev::after {
    color: var(--brand);
    font-size: 2.4rem;
    font-weight: 700;
  }

  @media (min-width: 1200px) {
    margin-top: 150px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;


export const SliderTitle = styled.div`
  display:flex;
  align-items:center;

  & h2{
    font-size:1.9rem;
    margin:0;
  }

  & a{
    text-decoration:none;
    color:var(--brand);
    font-size:1.5rem;
    font-weight:700;
    padding-left: 20px;
  }
`;


export const Card = styled.div`
  box-shadow: -1px 0px 7px 0px rgb(0 0 0 / 34%);
  padding: 5px;
  margin: 20px 10px;
  border-radius:8px;
  &:hover {
    .btn {
      display: block;
    }
  }
`;


export const Image = styled.figure`
  height:150px;

  & > img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
`;


export const Icons = styled.div`
  position:absolute;
  top:40px;
  right:20px;
`;


export const Icon = styled.figure`
  width:20px;
  margin:0;
  margin-bottom:5px;
  cursor: pointer;
  position:relative;

  & img{
    width:100%;
    object-fit:contain;
  }

  &:hover{
    .tooltip{
      display:block;
    }
  }
`;


export const Tooltip = styled.div`
  background-color: #0e984c;
  position: absolute;
  top: -150%;
  left: 30px;
  padding: 8px;
  border-radius: 8px;
  display:none;
  z-index:9;
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-right: 16px solid #0e984c;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    position:absolute;
    right:94%;
    bottom:0;
  }

  & h3 {
    color: var(--yellow);
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 3px;
  }

  & p {
    margin: 0;
    color: var(--white);
    font-size: 1.5rem;
  }
`;


export const Info = styled.div`
  border-top: 1px solid #e0e0e0;
  padding-top: 5px;
`;


export const Description = styled.div`
  display:flex;
  justify-content:space-between;
`;


export const Category = styled.p`
  color:var(--brand);
  font-size:1.2rem;
  margin:0;
`;


export const Weigth = styled.p`
  font-size:1.2rem;
  background-color:var(--brand);
  color:var(--white);
  padding:2px 5px;
  border-radius:10px;
  margin:0;
`;


export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;


export const Price = styled.p`
  font-size:2rem;
  margin-bottom:10px;
  margin-top:0;
  font-weight:700;

  & span{
    color:var(--brand);
  }
  
  & small{
    color:var(--grey);
    font-size:1.3rem;
    font-weight:400
  }
`;


export const GoCart = styled.button`
  background-color: var(--brand);
  color: var(--white);
  width:100%;
  border:none;
  cursor: pointer;
  text-decoration:none;
  display:block;
  text-align:center;
  padding:10px;
  display:none;
  font-size:1.5rem;
  top:100%;
  left:0;
  right:0;
`;
