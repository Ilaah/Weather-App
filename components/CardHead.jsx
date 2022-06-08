import React from 'react'

const CardHead = ({ info }) => {
  return (
    <section className='app__head'>

      <h3 className='app__head-title'>Weather App</h3>
      <h4 className='app__head-location'>{info?.name}, {info?.sys.country}</h4>

    </section>
  )
}

export default CardHead