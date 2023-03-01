import React from 'react'
import HomeCard from '../components/homeCard/HomeCard'

const Home = () => {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  }

  return (
    <div className='home' style={centerStyle}>
      <HomeCard />
    </div>
  )
}

export default Home