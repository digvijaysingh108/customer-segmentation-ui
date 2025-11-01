import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://images.pexels.com/photos/29179705/pexels-photo-29179705.jpeg",
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic est ea, culpa nemo adipisci quos!",
      cta: "Satisfied"
    },

    {
      img: "https://images.pexels.com/photos/34211768/pexels-photo-34211768.jpeg",
      intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus commodi optio officia sunt distinctio nam.",
      cta: "Underserved"
    }, 

    {
      img: "https://images.pexels.com/photos/7255271/pexels-photo-7255271.jpeg",
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsum nam hic deleniti quis harum?",
      cta: "Underbanked"
    }, 

    {
      img: "https://images.pexels.com/photos/8123899/pexels-photo-8123899.jpeg",
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsum nam hic deleniti quis harum?",
      cta: "Unsatisfied"
    }, 

    {
      img: "https://images.pexels.com/photos/9052810/pexels-photo-9052810.jpeg",
      intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsum nam hic deleniti quis harum?",
      cta: "Very Well"
    }
  ]

  return (
    <div>
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App
