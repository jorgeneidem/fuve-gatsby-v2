import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import HeaderBg from 'gatsby-image'
import logo from '../images/fuve-logo-white.png'

const HeaderWrapper = styled.div`
  background: #000000;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 80px;
  h1 img {
    width: 102px;
  }
  @media (max-width: 600px) {
    h1 img {
      width: 90px;
    } 
  }
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;  
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
`

const PayOff = styled.div`
  color: #888888;
  font-weight: 100;
  font-size: 12px;
  padding-left: 10px;
  padding-top: 6px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`

const NavBar = styled.nav`
padding-top: 3px;
  button {
    border: none;
    color: #ffffff;
    border-radius: 4px;
    padding: 11px 16px 12px 16px;
    margin-top: -6px;
    background-color: #21725C;
      a {
        color: #ffffff;
      }
      :hover {
        background-color: #21725C
      }
  }
`

const Header = ({ siteTitle, backgroundImage }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0, display: 'inline-block' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Fuve logo" />
        </Link>
      </h1>
      <PayOff>Future Vehicles Overview</PayOff>
      <NavBar>
            <button><Link to="/about">Filter</Link></button>
      </NavBar>
    </HeaderContainer>
    <HeaderBg style={{
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%'
    }}
    sizes={backgroundImage} />
  </HeaderWrapper>
)

export default Header
