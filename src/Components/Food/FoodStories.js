import React from 'react'
import FoodReusable from './FoodReusable';
const FoodStories = ({props}) => {
  const foodObj=[
    {
      img: 'https://c.ndtvimg.com/2023-05/ukobot4o_kofta-curry_625x300_03_May_23.jpg',
      title: 'BEETROOT KOFTA GRAVY',
      description: 'Beetroot Kofta Gravy Recipe This delicious veg kofta preparation is full of attractive colours and flavours. Spiced beetroot and potato balls (koftas) are immersed in an aromatic tomato-onion gravy. You can savour this beetroot kofta with roti or jeera rice.'
    },
    {
      img: 'https://c.ndtvimg.com/2023-05/t41aok2o_appam_625x300_01_May_23.jpg',
      title: `BANANA APPAM `,
      description: 'Banana Appam Recipe: Banana appam is a delicious South Indian sweet snack that is made with ripe bananas, rice flour, jaggery, and coconut. It is a Special dessert in Kerala and is often served during festivals and special occasions. Here is a simple recipe to make banana appam at home'
    },
    {
      img: 'https://c.ndtvimg.com/2023-01/7hofqi3o_chaat_625x300_12_January_23.jpg',
      title: 'HEALTHY KHAKHRA CHAAT',
      description: 'Healthy Khakhra Chaat Recipe: Khakhra chaat is made from wheat khakhra, which is topped with vegetables. This snack is crispy, tasty and easy to make, which can also be served as an appetizer. Khakhra is a thin crispy-round cracker which is made from mat bean, wheat flour and oil. It is a popular Gujarati snack, which is served for breakfast or evening snack.'
    },
    {
      img: 'https://c.ndtvimg.com/2020-03/o92rnucs_mango-coconut-barfi_640x480_27_March_20.jpg',
      title: 'RANGEELA BARFI',
      description: 'Rangeela Barfi Recipe: Rangeela barfi gives a colourful twist to the classic Indian sweet. This delicacy is especially fitting for Holi celebrations. This simple recipe uses cardamom as the main flavour, but you can add others as you wish - and bring variety in taste as well as appearance!'
    },
   
    {
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-broccoli-1648146826.jpeg',
      title: 'BROCCOLI',
      description: 'Broccoli is a rich source of vitamins, minerals, and antioxidants. Antioxidants can help prevent the development of various conditions.'
    },
    {
      img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg',
      title: 'BANANA',
      description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.'
    }
    
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Fitness Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
      <FoodReusable props={foodObj} />
        </div>
    
    </div>
</div>
 
  )
}

export default FoodStories