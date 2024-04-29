import { Component } from '@angular/core';
import { Capital } from '../../interfaces/capital';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public capitals: Capital [] = [];

  constructor ( private countriesService:CountriesService ) {}

  searchByName(  term: string  ):void  {
    this.countriesService.searchCountry(  term )
                          .subscribe( capitals =>  {
                              this.capitals  = capitals;
                          }  );
  };

}
