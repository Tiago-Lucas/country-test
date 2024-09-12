import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {


  faArrowLeft = faArrowLeft;

  country: any

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { valueCountry: any };
    this.country = state.valueCountry;
    console.log(this.country)
  }

  backPage() {
    this.router.navigate(['home'])
  }
}
