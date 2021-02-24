import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SlideshowComponent } from './slideshow/slideshow.component';







const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
