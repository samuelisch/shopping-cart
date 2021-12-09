import React, { useState, useEffect } from 'react'
import Instruments from '../assets/Instruments'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../assets/Button'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
`

const StyledImg = styled.img`
  width: 100%;
`

const StyledName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

const StyledButton = styled(Button)`
  border: 1px solid black;
  background: inherit;
  font-size: 1.5rem;
  font-family: arial;
  padding: 10px;
  margin-top: 50px;

  &:hover {
    background: rgb(255, 120, 0);
  }
`

const Home = () => {
  const [featured, setFeatured] = useState([])

  const randInt = (length) => {
    return Math.round(Math.random() * length - 1)
  }

  useEffect(() => {
    const instruments = Instruments.map(inst => {
      return {
        name: inst.name,
        image: inst.imgSrc.default
      }
    })
    const randNum = randInt(Instruments.length)
    setFeatured(instruments[randNum])
  }, [])

  return (
    <div>
      {featured !== undefined &&
        <StyledContainer>
          <StyledText>Featured Clarinet of the day</StyledText>
          <StyledImg src={featured.image} alt="featured clarinet" />
          <StyledName>{featured.name}</StyledName>
          <Link to="/products"><StyledButton className="shop" text="Shop now" /></Link>
      </StyledContainer>
      }
  </div>
  )
}

export default Home