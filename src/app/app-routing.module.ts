import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact/contact-page.component';

const routes: Routes = [
  /* {
    path: 'home',
    component:  HomePageComponent
  }, */{
    path: 'about',
    component:  AboutPageComponent
  },{
    path: 'contact',
    component: ContactPageComponent
  },{
    path: 'countries',
    loadChildren: ()  =>  import('./countries/countries.module').then(  m =>  m.CountriesModule )
  },{
    path: '**',
    redirectTo: 'countries'
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes) //Este segmento se pone asi, si y solo si estamos hablando del app-routing prinbcipal de nuestra aplicacion
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
