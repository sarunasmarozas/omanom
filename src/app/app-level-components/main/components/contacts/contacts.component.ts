import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;

  map: google.maps.Map;
  infoWindow = new google.maps.InfoWindow();
  marker: google.maps.Marker;

  lat = 54.741021;
  lng = 25.222984;
  POICoordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.POICoordinates,
    zoom: 17,
    panControl: true,
    panControlOptions: {
      position: 12,
    },
  };

  monamoContent = '\"UAB Monamo\" - Perkunkiemio g. 4A, Vilnius';

  constructor() {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker = new google.maps.Marker({
      position: this.POICoordinates,
      map: this.map,
      draggable: false,
      // icon: "https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png",
      animation: google.maps.Animation.DROP,
      clickable: true,
      title: this.monamoContent,
    });
    this.infoWindow = new google.maps.InfoWindow({
      content: this.monamoContent,
    });
    this.marker.setMap(this.map);
    google.maps.event.addListener(this.marker, 'click', () => {
      this.infoWindow.open(this.map, this.marker);
    });
  }

  handleLocationError(
    browserHasGeolocation: boolean,
    pos: google.maps.LatLng
  ): void {
    this.infoWindow.setPosition(pos);
    this.infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    this.infoWindow.open(this.map);
  }

  // scrollDown() {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: document.body.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }, 100);
  // }
}
