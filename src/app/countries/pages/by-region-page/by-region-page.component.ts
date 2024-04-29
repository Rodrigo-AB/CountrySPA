import { Component } from '@angular/core';
import { Region } from '../../interfaces/region';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public regions: Region [] = [];

  constructor ( private countriesService:CountriesService ) {}

  searchByRegion(  term: string  ):void  {
    this.countriesService.searchRegion(  term )
                          .subscribe( regions =>  {
                              this.regions  = regions;
                          }  );
  };

}
