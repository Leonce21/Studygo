import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  subjectDetails = [
    {
      id:1,
      subjectName:"Java",
      subjectDetails:"Object-oriented programming language",
      subjectImg:"https://img-0.journaldunet.com/bZCEtNjEi7FNfZj-aXUOzQ6TbVY=/1500x/smart/dbf20d22e2e84967995f3f435df52c19/ccmcms-jdn/1385711.jpg"
    },
    {
      id:2,
      subjectName:"Ethical Hacking",
      subjectDetails:"Legal system penetration testing",
      
      subjectImg:"https://images.unsplash.com/photo-1666875758381-9e627d24133e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:3,
      subjectName:"Advertising",
      subjectDetails:"Promotional messaging dissemination",
      
      subjectImg:"https://education.illinois.edu/images/default-source/communications-images/ai-news-lead.jpg?sfvrsn=187cc4d7_1"
    },
    {
      id:4,
      subjectName:"Cloud Computing",
      subjectDetails:"Remote data processing services",
      
      subjectImg:"https://www.appitel.fr/wp-content/uploads/2020/01/iot-3337536_640.png"
    },
    {
      id:5,
      subjectName:"Cyber Security",
      subjectDetails:"Digital threat protection measures",
      
      subjectImg:"https://plus.unsplash.com/premium_photo-1674506654119-28356186d88f?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:6,
      subjectName:"Marketing Strategy",
      subjectDetails:"Brand promotion tactics",
      
      subjectImg:"https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:7,
      subjectName:"Information System",
      subjectDetails:"Data management technology",
      
      subjectImg:"https://learndjango.com/static/images/social-default-image.png"
    },
    {
      id:8,
      subjectName:"Data Analysis",
      subjectDetails:"Information interpretation techniques",
      
      subjectImg:"https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg"
    }
  ]

}
