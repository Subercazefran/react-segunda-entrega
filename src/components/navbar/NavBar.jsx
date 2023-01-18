import { Link, NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import styled from 'styled-components';
import BurguerButton from './BurgerButton';
import CartWidget from "./CartWidget";

function NavBar(){



    const activeClassName = "activeLink";

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        // cuando esta true lo pasa a false y al reves
        setClicked(!clicked)
    }
    return (
        <>
        <NavContainer>
            <Link to={"/"}>
                <h2>Instituto digital</h2>
            </Link>
            <div className={`links ${clicked ? 'active' : ''}`}>
            <NavLink to={"/cursos"} className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>Todos los cursos</NavLink>
            <NavLink to={"/category/Desarrollo Web"} className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>Programacion</NavLink>
            <NavLink to={"/category/Lenguajes"} className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>Diseño ux/ui</NavLink>
            <NavLink to={"/category/Otros"} className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }>Otros cursos</NavLink>
         </div>
         <CartWidget/>
         <div className='burguer'>
            <BurguerButton  clicked={clicked} handleClick={handleClick}  /> 
         </div>
         <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
        </>  
    )
}

export default NavBar;





const NavContainer = styled.nav`
    h2{
        font-weight: 400;
        color: #333;
        font-weight: bold;
    }
    padding-left: 1.4rem;
    background-color: #ee9d05;
    display:flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: #fff;
        text-decoration: none;
        margin-right: 0.8rem;
        padding-right: 1.5rem;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
          color: white;
          font-size: 2rem;
          display: block;
        }
        @media(min-width:768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: black;
                display: inline;
            }
            display: block;
        }
        }
        .links.active{
            width: 100%;
            display: block;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top: 30%;
            left: 0;
            right: 0;
            text-align: center;
            a{
              color:black;
              margin-top: 1rem;
              font-size: 2rem;
            }
        }
      
        .burguer{
            @media(min-width: 768px){
                display: none;
            }
        }
    `

    const BgDiv = styled.div`
    background-color: #053bee;
    position: absolute;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;
    &.active {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
  }
`