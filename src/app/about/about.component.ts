import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgPath = './assets/img/icons/';

  characteristics = [
    {
      'icon': this.imgPath +'route-solid.svg',
      'charName': 'MY JOURNEY STARTED',
      'charDescr': 'with my bachelor study in Business Administration in Sibiu and a started master program in Business Informatics in Vienna.',
    },
    {
      'icon': this.imgPath +'passport-solid.svg',
      'charName': 'INTERNATIONAL EXPERIENCE',
      'charDescr': 'Plenty of international experience acquired through working and living in different countries (Austria, Greece, Romania) and dealing with people all over the world in my professional activity in the airline sector.',
    },
    {
      'icon': this.imgPath +'box-open-solid.svg',
      'charName': 'THINKING OUT OF THE BOX',
      'charDescr': 'it was clear to me that instead of just handling the business-part, I will love to create new solutions and technologies for the up and up digital world.',
    },
    {
      'icon': this.imgPath +'school.svg',
      'charName': 'TRAINING AND DEVELOPMENT',
      'charDescr': 'I decided on a professional advanced training education as a Front-End Developer in a professional software development school.',
    }
  ]


  skills = [
    {
      'skillName': 'HTML',
      'skillLevel': 85
    },
    {
      'skillName': 'CSS',
      'skillLevel': 85
    },
    {
      'skillName': 'JavaScript',
      'skillLevel': 75
    },
    {
      'skillName': 'Bootstrap',
      'skillLevel': 70
    },
    {
      'skillName': 'Git & Github',
      'skillLevel': 70
    },
    {
      'skillName': 'Angular',
      'skillLevel': 60
    },
    {
      'skillName': 'Design Thinking',
      'skillLevel': 70
    },
    {
      'skillName': 'Node.js',
      'skillLevel': 50
    },
    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
