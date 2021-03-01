import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {


  images = ['background.jpg', 'laptop.jpg', 'austria.jpg'];
  headlines = [
  "Hi, I'm Dan Mercurean. I'm a Front-End Developer.",
  "Bring Software Engineering to the next level", 
  "Take a look at my latest projects"
];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);

    }, 8000);
}
}
