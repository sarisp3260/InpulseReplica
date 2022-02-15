import '../css/Pages.css'
import React from 'react'

import CardPage from './CardPage'

const Pages = () => {

    const pageExample = [
        {
            image: "https://www.affde.com/uploads/article/96557/Q9mlGo9oZhgqmxUb.jpeg",
            text: "Pages 1"
        },
        {
            image: "https://blog.hubspot.com/hubfs/Image%202019-10-11%20at%203.39.28%20PM.png",
            text: "Pages 2"
        },
        {
            image: "https://d6interactive.com/wp-content/uploads/2019/12/Best-Website-Design-Trends-for-2020-1024x559.png",
            text: "Pages 3"
        },
        {
            image: "https://blog.hubspot.com/hubfs/Image%202019-10-11%20at%203.39.28%20PM.png",
            text: "Pages 4"
        },
        {
            image: "https://d6interactive.com/wp-content/uploads/2019/12/Best-Website-Design-Trends-for-2020-1024x559.png",
            text: "Pages 5"
        }
    ]
  return (
    <div className='pages'>
        <div className="contPages">
            <h1>Example Pages</h1>

            <div className="cardgrid">
                {
                    pageExample.map(element => <CardPage image={element.image} text={element.text}/>)
                }
            </div>
            </div>
    </div>

  )
}

export default Pages