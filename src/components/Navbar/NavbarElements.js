import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdToll } from 'react-icons/md'
import { CgLoadbarSound } from 'react-icons/cg';



export const Nav = styled.nav`
width: 100%;
transition: 0.8s ease;
background: ${({active}) => active ? "#000" : "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100% )"};
height: ${({active}) => active ? "100px" : "180px"} ;
backdrop-filter: ${({active}) => active ? "blur(20px)" : "blur(0px)"} ;
display: flex;
justify-content: center;
font-size: 20px;
position: sticky;
top: 0;
z-index: 999;


@media screen and (max-width: 960px){
    height: 80px;
    background: ${({active}) => active ? "#000" : "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100% )"}, ${({ click }) => ( click ? "#000" : "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100% )")};
}
`
export const NavbarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1000px;


@media screen and (max-width: 960px){
    justify-content: space-between;
}
`

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-top: 10px;
@media screen and (max-width: 960px){
    margin-top: 0;
}
`
export const NavIcon = styled(MdToll)`
margin: 0 0.5rem 0 2rem;
fill: #fff;
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    fill: #fff;
}
`
export const MenuBars = styled(CgLoadbarSound)`
    transform: rotate(-90deg) translate( 40%, 55%);
    font-size: 3rem;
    color: white!important;
    
    `
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
    width: 100%;
display: flex;
flex-direction: column;
margin-left: -40px;
height: 90vh;
position: absolute;
left: 0;
top: ${({ click }) => (click ? "75%" : "-1000px")};
opacity: 1;
transition: all 0.5s ease;
background: #000; 
z-index:100;
}
`
export const NavItem = styled.li`
height: 50px;

@media screen and (max-width: 960px){

    width: 80%;
}
`

export const NavLinks = styled(Link)`
height: 100%;
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 3rem;
font-weight: 700;
@media screen and (max-width: 960px) {
    text-align: center;
   margin-left: -10px;
    width: 100%;
    display: table;
    padding: 2rem 1rem;

   
}
&:hover{
    
    color: #ff4040;
    transition: all 0.3s ease;
}
`
