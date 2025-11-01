import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  
  return (
    <div id='right' className='h-[80vh] w-3/4 flex overflow-x-auto gap-10'>
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx} img = {elem.img} intro = {elem.intro} cta = {elem.cta} />
      })}
    </div>
  )
}

export default RightContent
