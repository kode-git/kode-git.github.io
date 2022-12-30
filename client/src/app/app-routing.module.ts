import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PricesComponent } from './pages/prices/prices.component';
import { MailComponent } from './pages/mail/mail.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: PricesComponent },
  { path: 'mail', component: MailComponent},
  { path: 'faq', component : FaqComponent},
  { path : 'terms', component : TermsComponent},
  { path : 'privacy', component : PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
