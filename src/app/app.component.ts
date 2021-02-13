import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PFleaker-frontend';
  // http-server-spa dist/PFleaker-frontend/ index.html 8080
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      swUpdate.activateUpdate().then(() => document.location.reload())
    })
  }
}
