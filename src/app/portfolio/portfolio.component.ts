  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  allProjects = [
    {
        name: "ElPolloLoco",
        type: "game"
    },
    {
        name: "Join",
        type: "group"
    },
    {
        name: "Kochwelt",
        type: "all"
    }
];
projectsList = document.getElementById("projects-list");
filteredProjects = [];

  constructor() { }

  ngOnInit(): void {
  }

  show( filter ){
    this.filteredProjects = this.getFiltered(filter);
    // console.log(filteredProjects);
    if(this.filteredProjects.length == 0)
        console.error(new Error("FILTER UNKNOW!"));
    else{
      this.populateProjectList(this.filteredProjects);
    }
}
populateProjectList( allProjects ){
  this.projectsList.innerHTML = '';
  for(let i = 0; i < allProjects.length; i++){
      this.projectsList.innerHTML += `
          <div class="projects-list">
              <p>${allProjects[i].name}</p>
          </div>
      `;
  }
}
getFiltered(filter){
  return filter == 'all'? this.allProjects : this.allProjects.filter( e => e.type == filter);
}

}
