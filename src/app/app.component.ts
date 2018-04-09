import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  options = {};

  center = latLng(46.879966, -121.726909);

  zoom = 5;


  ngOnInit(){
    console.log("Our current position");
    var scope = this;
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude

      scope.center = latLng(lat, long);
      scope.zoom = 60;
    });

    this.options = {
    layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ]
    };
  }
}
