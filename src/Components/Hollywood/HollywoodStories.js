import React from 'react'
import HollywoodReusable from './HollywoodReusable'
const HollywoodStories = ({props}) => {
  const hollywoodObj=[
    {
      
        img: 'https://th.bing.com/th/id/OIP.ZuIDKmo5laSMw01Fc8abTAAAAA?pid=ImgDet&rs=1',
        title: 'GOOD AFTER BAD',
        description: 'The film follows the relationship between a bullied student, Shelly, whose home life is in shambles, and a wealthy eccentric, Wes, with no friends and issues with women. Things take a turn when Wes offers to become the teens guardian.',
        date: '21 April 2017'
      },
      {
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXDaxvXPpbQkUf2ifM7yg6b-AIsZT3o_hMf8nFLcttL-PVAM6r',
        title: 'AVATAR',
        description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        date: '18 December 2009'
      },
      {
          img: 'https://images-na.ssl-images-amazon.com/images/I/81fMDwcFAqL._RI_.jpg',
          title: 'The Viking War',
          description: 'The Viking War: Japan (Japanese title) ベルセルク 狂戦士: Russia: Война викингов: Spain: Guerra de vikingos: UK: The Viking War',
          date: '5 February 2019'
      },
      
    
    {
      img: 'https://th.bing.com/th/id/OIP.yn3FfEP-3SCLrr-PsJOlpwHaKd?pid=ImgDet&rs=1',
      title: 'ASTRO',
      description: 'A billionaire and his team with a private space exploration program, returns to Earth with an abducted extraterrestrial from a newly discovered alien planet, with hidden secrets of his own from this world.',
      date: '8 June 2018'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg',
        title: 'BLACK ADAM',
        description: 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
        date: '21 October 2022'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg',
      title: 'BLACK PANTHER: WAKANDA FOREVER',
      description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.',
      date: '11 November 2022'
    },
    
    {
        img: 'https://1.bp.blogspot.com/-buMtBZTQ0DE/XpP0rnhCSII/AAAAAAAAYTY/orFZt5I5eg0JvbKBV9QgaZckT9eUCWlxQCLcBGAsYHQ/s1600/91zskQrnGpL._RI_.jpg',
        title: 'Robert Reborn',
        description: 'Robert Reborn: Directed by Andrew Jones. With Rahel Kapsaski, Lee Bane, David Lenik, Dennis Farrin. In 1951 USSR, infamous killer doll Robert battles Stalins henchmen on board a plane.',
        date: '5 April 2022'
    }
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Hollywood Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
      
          <div className='hcontainer'>
            <div className='holly-left'>
            <HollywoodReusable props={hollywoodObj} />
            </div>
            <div className='holly-right'>
 advertisement
</div>
          </div>
        
        </div>
    
    </div>

 
  )
}

export default HollywoodStories