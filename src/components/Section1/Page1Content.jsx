import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {

  console.log(props);
  
  return (
    <div className='pb-20 pt-10 flex items-center gap-4 h-[90vh] px-18'>
      <LeftContent />
      <RightContent users = {props.users} />
    </div>
  )
}

export default Page1Content
