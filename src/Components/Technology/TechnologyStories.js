import React from 'react'
import TechnologyReusable from './TechnologyReusable'
const TechnologyStories = ({props}) => {
  const technologyObj=[
   
    {
      
        img: 'https://i.ytimg.com/vi/BMBxHlQTDE0/maxresdefault.jpg',
        title: 'HTML',
        description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
        developer: 'Tim Berners-Lee '
      },

      {
      
        img: 'https://www.techdevl.com/staff/css/img/imglogo.png',
        title: 'CSS',
        description: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced. ',
        developer: 'Hakon Wium Lie  '
      },

      {
        img: 'https://www.tc-web.it/wp-content/uploads/2018/07/javascript_logo.jpg',
        title: 'JAVA SCRIPT',
        description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.',
        developer: 'Brendan Eich'
      },

     
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
      title: 'REACT',
      description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
      developer: 'Meta and community'
    },
    {
        img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
        title: 'NODE-JS',
        description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
        developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
    },
    {
      img: 'https://onaircode.com/wp-content/uploads/2018/07/python.jpg',
      title: 'Python',
      description: 'Python is an interpreted, interactive, object-oriented, open-source programming language.',
      developer: 'Guido Van Rossum'
  },
    {
      img:"https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/06/the-seo-guide-to-angular.png",
      title: 'ANGULAR',
      description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      developer: 'Google'
    }
    
  ]
  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Technology Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
        <TechnologyReusable props={technologyObj} />
        </div>
    
    </div>
</div>
 
  )
}

export default TechnologyStories