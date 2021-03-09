import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // selection = 'all';

  currentFilter = '';


  projects = [
    {
      title: 'El Pollo Loco',
      details: 'A JavaScript-based jump-and-run-game.',
      app_link: 'http://dan-mercurean.developerakademie.com/EL%20POLLO%20LOCO/index.html',
      github_link: 'https://github.com',
      img: 'elpolloloco.png',
      img_mobile: '',
      category: 'JavaScript'

    },
    {
      title: 'JOIN - The Task Manager',
      details: 'Group project of a Task Management JavaScript App',
      app_link: 'http://gruppe-51b.developerakademie.com/index.html',
      github_link: 'https://github.com',
      img: 'join.png',
      img_mobile: '',
      category: 'JavaScript'
    }
    // {
    //   title: 'JOIN - The Task Manager',
    //   details: 'Group project of a Task Management JavaScript App',
    //   app_link: 'http://gruppe-51b.developerakademie.com/index.html',
    //   github_link: 'https://github.com',
    //   img: 'join.png',
    //   img_mobile: '',
    //   category: 'JavaScript'
    // }
  ];

  visibleProjects = this.projects;

  constructor() { }

  ngOnInit(): void {
   
  }


  /**
 * Filter visible projects
 * @param newFilter: defines current filter selection for visible project-portfolio 
 */
updateFilter (newFilter? : string) {
  if (newFilter == undefined) {
    this.currentFilter = '';
    this.visibleProjects = this.projects;
  } else if (newFilter == 'Angular') {
    this.currentFilter = 'Angular';
    this.visibleProjects = this.projects.filter(project => project.category == 'Angular');
  } else if (newFilter == 'JavaScript') {
    this.currentFilter = 'JavaScript';
    this.visibleProjects = this.projects.filter(project => project.category == 'JavaScript');
  }
}

}
