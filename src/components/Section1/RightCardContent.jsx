import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className="bg-black/30 absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <div className="bg-white rounded-full h-10 w-fit flex items-center justify-center px-5 py-6">
          <h4 className="text-2xl font-semibold">{props.id+1}</h4>
        </div>

        <div className="leading-loose text-white">
          <p className="mb-10 text-xl leading-loose">
            {props.intro}
          </p>
          <button className="flex font-semibold gap-4">
            <div className="bg-blue-600 px-5 py-1 rounded-3xl">
              <h4>{props.cta}</h4>
            </div>
            <div className="bg-blue-600 px-5 py-1 rounded-3xl">
              <i class="ri-arrow-right-line"></i>
            </div>
          </button>
        </div>
      </div>
  )
}

export default RightCardContent
