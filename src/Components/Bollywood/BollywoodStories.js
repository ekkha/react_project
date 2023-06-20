import React from 'react'
import BollywoodReusable from './BollywoodReusable';
const BollywoodStories = ({props}) => {
  const bollywoodObj=[
    {
      img:'https://th.bing.com/th/id/OIP.h2Y41JujFD6Kjn5C8vqr9QHaEK?pid=ImgDet&rs=1',
      title:"Brahmastra Part One",
      para:"Mukerji’s biggest achievement is getting this relationship to flourish, Kapoor and Bhatt being among the precious few real-life couples with palpable onscreen chemistry. She gives him class; he becomes touchingly humble before cinema’s most responsive young actor, and – voilà – we get something real and cherishable to cling to as the universe around this pair explodes in spurts of fantastical FX. ",
      year:'9 September 2022'
    },
    {
      img:'https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2022/11/patha.jpg',
      title:'PATHAAN',
      para:'Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan and Abbas Tyrewala, from a story by Anand. ',
      year:'25 January 2023'
    },
    {
      img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqTdV2aY1TQpi69QFFmTgcrA-Frnh1FJL7B7MGWaTfE9KniCBtbaS4fltBt75BxO0Ex8-yK0J7amAYRB6lm_2btGdVNOCgY5KKDVTHrHAHGoxrSKM0ik1t1xWO19_51eEdalt9zCWh79rs2M-ckW8ZezXs4uJBMPPVfqmEjNlEruFXIh_rjhgZIx-o/s1280/2558152-cirkus-1.jpg',
      title:'CIRKUS',
      para:'Cirkus is a 2022 Indian Hindi-language period comedy film directed and produced by Rohit Shetty. The film is jointly produced by Rohit Shetty Productionz and T-Series. The film stars Ranveer Singh and Varun Sharma in dual roles alongside Pooja Hegde and Jacqueline Fernandez.',
      year:'23 December 2022'
    },
    {
      img:'https://th.bing.com/th/id/OIP.ndO_G-dI1pLSdel4bgLlYAAAAA?pid=ImgDet&rs=1',
      title:"K.G.F: Chapter 2",
      para:"K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films.  ",
      year:'14 April 2022'
    },
    {
      img:'https://e0.pxfuel.com/wallpapers/687/553/desktop-wallpaper-bhool-bhulaiyaa-2-stills-first-look-posters-of-bhool-bhulaiyaa-2-movie.jpg',
      title:'Bhool Bhulaiyaa2',
      para:'When strangers Reet and Ruhan cross paths, their journey leads to an abandoned mansion and a dreaded spirit that has been trapped for 18 years. ',
      year:'20 May 2022'
    },
    {
      img:'https://mymovies.vishalkranti.com/wp-content/uploads/2022/10/Thank-God-Movie-Download.jpg',
      title:'Thank God',
      para:'Thank God is a 2022 Indian Hindi-language fantasy comedy drama film directed by Indra Kumar. It is an official remake of the 2009 Danish film Sorte kugler (What Goes Around, 2009). It stars Ajay Devgn, Sidharth Malhotra and Rakul Preet Singh.',
      year:'25 October 2022'
    },
    {
      img:'https://cdn.bollywoodbubble.com/wp-content/uploads/2022/10/Goodbye-movie-review.jpg',
      title:"Good Bye",
      para:"Goodbye Review: The performances, despite Amitabh Bachchan headlining the cast, are rudimentary. The writing is inconsistent and aimed at the easily swayed.",
      year:'7 October 2022'
    },
    {
      img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0vr86Lby4fu-sc8qzkpLc2APvqj923i1k_7gi4aA5fuY2Sa4TPxpqa5LCWWSddNmdtwaX0uUlFDxC4iVMqZ1YEetmyGFV8RAhzLV_DupgEndbYfVtvPulYa19CoQKdjG_LJ-0m6RHvVgiHz7BCM60B7DsX_NUtJ1MYTl_P0pB0ef0iARDLnIbzoUMJg/s1280/Ram-Setu-wallpaper.jpg',
      title:'Ram Setu',
      para:'An atheist archaeologist turned believer must race against time to prove the true existence of the legendary Ram Setu before evil forces destroy the pillar of India heritage',
      year:'25 October 2022'
    },
    {
      img:'https://th.bing.com/th/id/OIP.CUOm-W6GVTxlOCkHNFOrogAAAA?pid=ImgDet&rs=1',
      title:'Shamsheera',
      para:'In the fictitious city of Kaza, a warrior tribe is imprisoned, enslaved and tortured by a ruthless authoritarian Shudh Singh. Shamshera is a legend for his tribe who relentlessly fights for his tribe.',
      year:'7 July 2022'
    },
    {
      img:'https://www.dynamitenews.com/images/2022/05/22/jug-jugg-jeeyo-trailer-out-varun-and-kiara-starrer-takes-us-on-a-roller-coaster-ride-of-emotions/628a22003d38b.jpg',
      title:'Jugjugg Jeeyo',
      para:'Jugjugg Jeeyo received mixed-to-positive reviews from critics. Taran Adarsh of Bollywood Hungama rated the film 4 out of 5 stars and wrote "Jugjugg Jeeyo balances drama, humour and emotions seamlessly". Ronek Kotecha of The Times Of India rated the film 3.5 out of 5 stars and wrote "Just like its characters, Jugjugg Jeeyo too has its flaws but at the end of the day, it’s all in the family and this is just the kind of wholesome family entertainer". ',
      year:'24 June 2022'
    },
    {
      img:'https://i.ibb.co/zJr4v5b/Raksha-Bandhan.jpg',
      title:'Raksha Bandhan',
      para:'Lala Kedarnath, the eldest and only brother of 4 sisters, runs a chaat shop that was started by his father. Lala promises his frail mother on her deathbed that he will get married only after he fulfills the responsibility of marrying his sisters into suitable homes first.',
      year:'11 August 2022'
    },
    {
      img:'https://th.bing.com/th/id/OIP.LtwZrWvRTzkY9t23CvI8cAAAAA?pid=ImgDet&w=400&h=570&rs=1',
      title:'Tu Jhoothi Main Makkar',
      para:'Tu Jhoothi Main Makkaar starts off as a cut-price Zindagi Naa Milegi Dobaara. It ends up in Rajshri Films and Dharma Productions terrain. The film seeks to make up with mounds of verbiage what it lacks in terms of depth.It is quite a while before the male protagonist, played with misplaced zeal by Ranbir Kapoor, begins to see the sheer futility of it all. Bina baat ke saara drama hua, he wonders aloud. He is bang on. Tu Jhoothi Main Makkaar is indeed a case of much hollow hullabaloo about absolutely nothing..',
      year:'8 March 2023'
    },
    {
      img:'https://th.bing.com/th/id/R.70bf8abce2a73b9a47eb6476f8c2acdc?rik=nVVeMn1qhGRHig&riu=http%3a%2f%2fgame-ost.com%2fstatic%2fcovers_soundtracks%2f1%2f2%2f129844_168755.jpg&ehk=CYga0xo8Z39uWzH0VAXo%2fo8gjYhjlIWICBhXTHRFWzo%3d&risl=&pid=ImgRaw&r=0',
      title:"Hum Sath Sath Hai",
      para:"Hum Saath Saath Hain is the third film to feature Salman Khan with Rajshri Productions. Raamlaxman composed its music while Dev Kohli wrote the lyrics. Principal photography took place in Mumbai and various locations in Rajasthan. The film was released on 5 November 1999, and became the highest grossing film of the year and one of biggest blockbusters of the decade,[4] with a worldwide gross of ₹817.12 million (US$18.98 million).[3] It received predominantly positive reviews from critics. ",
      year:'5 November 1999'
    },
    {
      img:'https://www.game-ost.com/static/covers_soundtracks/2/6/265775_260696.jpg',
      title:'Hum Apke Hain Koun',
      para:'Hum Aapke Hain Koun..! also known by the initialism HAHK, is a 1994 Indian Hindi-language musical romantic drama film written and directed by Sooraj Barjatya and produced by Rajshri Productions. The film stars Madhuri Dixit and Salman Khan and celebrates Indian wedding traditions by means of a story of a married couple and the relationship between their families; a story about sacrificing one family. The basic plot is based on studios earlier film Nadiya Ke Paar, which was based on Keshav Prasad Mishra s Hindi novel Kohbar Ki Shart. ',
      year:'5 August 1994'
    },
    {
      img:'https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Kuch-Kuch-Hota-Hai.jpg',
      title:'Kuch Kuch Hota Hain',
      para:'Shah Rukh Khan and Kajol painted an eternal love story on the silver screen with their romance in ‘Kuch Kuch Hota Hai’. The film was Karan Johar’s maiden directorial and earned him a whole lot of praise. The college drama, which also featured Rani Mukerji in a pivotal role, continues to entertain generations. As the film completed 21 years today, here’s taking a look at 21 lesser known facts about the romantic saga.',
      year:'16 October 1998'
    },
    {
      img:'https://www.kariyawasam.com/wp-content/uploads/2012/05/bholi-si-surat-dil-to-pagal-hai-1997.jpg',
      title:'Dil To Pagal Hai',
      para:'Dil To Pagal Hai was the second of Chopras 4 consecutive films to star Shah Rukh Khan in the lead role. It was the third film to feature Shah Rukh Khan opposite Madhuri Dixit, after Anjaam (1994) and Koyla (1997). The film was originally titled Maine To Mohabbat Kar Li and Tevar before Yash Chopra finally settled on Dil To Pagal Hai as the title.',
      year:'30 October 1997'
    },
    {
      img:'https://image.tmdb.org/t/p/original/uAqUozzKrNvDwqRHSVVxKvByAqK.jpg',
      title:'Hera Pheri',
      para:'Hera Pheri was the first time that Priyadarshan worked with Akshay Kumar and Sunil Shetty. He had worked with Paresh Rawal in Doli Saja Ke Rakhna. It also marked the beginning of a long association between Priyadarshan and the three actors. Following Hera Pheri, Priyadarshan has made sure that either Kumar, Shetty, Rawal, or a combination of the three actors would star in his films. The only exceptions are Dhol, Billu, Tezz and Rangrezz. Parts of the film were shot in Dubai and South Africa and Hera Pheri 3 will also be shot there.',
      year:'31 March 2000'
    },
    {
      img:'https://images-na.ssl-images-amazon.com/images/I/91GKQJiWgHL._SL1430_.jpg',
      title:'Dhoom 2',
      para:'Dhoom 2 was released on 24 November 2006 in India, where it received the widest release in Indian cinema history at the time with over 1800 prints, including 250 digital copies. Some locations raised ticket prices for the film. It was simultaneously dubbed and released in Tamil and Telugu languages. ',
      year:'24 November 2006'
    }
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Bollywood Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
        <BollywoodReusable props={bollywoodObj} />
        </div>
    
    </div>
</div>
 
  )
}

export default BollywoodStories