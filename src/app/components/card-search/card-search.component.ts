import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {
  @Output() regionChangeEvent = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  faSearch = faSearch;

  search(event: any): void {
    const searchText = event.target.value;
    this.searchEvent.emit(searchText);
  }
  regionChange(event: any) {
    const selectedRegion = event.target.value;

    if (this.searchInput) {
      this.searchInput.nativeElement.value = '';
      this.searchEvent.emit('');
    }

    if (selectedRegion === 'WorldWide') {
      this.regionChangeEvent.emit('');
    } else {
      this.regionChangeEvent.emit(selectedRegion);
    }
  }

}

