import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { bindCallback } from "rxjs";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements AfterViewInit {
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;

  map: google.maps.Map;
  infoWindow = new google.maps.InfoWindow();
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

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

  marker = new google.maps.Marker({
    position: this.POICoordinates,
    map: this.map,
    draggable: false,
    // icon: "https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png",
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: "Monamo - Perkunkiemio g. 4A, Vilnius",
  });

  constructor() {}

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
    this.marker.addListener("click", this.getClientToPOI);
  }

  getClientToPOI = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos: Position) => {
          const currentClientPos: google.maps.Place = {
            location: {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            },
          };

          // this.infoWindow.setPosition(this.POICoordinates);
          // this.infoWindow.setContent("Monamo - Perkunkiemio g. 4C, Vilnius");

          this.directionsService.route(
            {
              origin: currentClientPos.location,
              destination: this.POICoordinates,
              travelMode: google.maps.TravelMode.DRIVING,
              drivingOptions: {
                departureTime: new Date(),
                trafficModel: google.maps.TrafficModel.PESSIMISTIC,
              },
              unitSystem: google.maps.UnitSystem.METRIC,
              region: "LT",
            },
            (directions) => {
              this.directionsRenderer.setMap(this.map);
              this.directionsRenderer.setDirections(directions);
            }
          );
        },
        () => this.handleLocationError(true, this.map.getCenter())
      );
    } else {
      this.handleLocationError(false, this.map.getCenter());
    }
  };

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
}
