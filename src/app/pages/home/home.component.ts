import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  arrayCountries : any[] = []
  filteredCountries : any[] = []
  selectedRegion: string = '';
  searchTerm: string = '';



  constructor(private countryService: CountryService, private router: Router) {
  }

  ngOnInit() {
    this.countryService.allCountries().subscribe({
      next: res => {
        console.log(res)
        this.arrayCountries = res
        this.filteredCountries = this.arrayCountries
      },
      error: err => {
        console.log(err)
      }
    })
  }

  filterCountries(searchTerm: string) {
    this.applyFilters(searchTerm, this.selectedRegion);
  }

  filterByRegion(region: string) {
    this.selectedRegion = region;
    this.applyFilters(this.searchTerm, region);
  }

  private applyFilters(searchTerm: string, region: string) {
    let filteredByRegion = this.arrayCountries ;

    if (region) {
      filteredByRegion = this.arrayCountries .filter(country => country.region === region);
    }

    if (searchTerm) {
      this.filteredCountries = filteredByRegion.filter(country =>
        country.name.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredCountries = filteredByRegion;
    }
  }

  nextPage(value: any){
    console.log(value,"aqui")
    this.router.navigate(['details'], {
      state: {
        valueCountry: value
      }
    })
  }
}
