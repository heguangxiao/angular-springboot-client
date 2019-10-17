import {Component, ElementRef, NgZone, OnInit} from '@angular/core';
import {HouseService} from '../../service/house.service';
import {Observable} from 'rxjs';
import {House} from '../../class/House';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {HouseFilter} from '../../class/houseFilter';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-list-house-user',
  templateUrl: './list-house-user.component.html',
  styleUrls: ['./list-house-user.component.css']
})
export class ListHouseUserComponent implements OnInit {
  listHouse: House[];
  houseFilter: HouseFilter = new HouseFilter();

  latitude: number;
  longitude: number;
  zoom: number;
  private geoCoder;
  address: string;
  public searchElementRef: ElementRef;
  p: any;

  constructor(private houseService: HouseService, private loginService: AuthenticationService,
              private router: Router, private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.reloadData();
    this.setCurrentLocation();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // tslint:disable-next-line:new-parens
      this.geoCoder = new google.maps.Geocoder;

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({location: {lat: latitude, lng: longitude}}, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          console.log('No results found');
          // window.alert('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
        // window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    // this.latitude = $event.coords.lat;
    // this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  reloadData() {
    this.houseService.getListHouse().subscribe(data => {
      this.listHouse = data;
    });
  }

  houseDetail(id: number) {
    this.router.navigate(['houseDetail', id]);
  }
}
