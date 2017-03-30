import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html'
})
export class NosotrosComponent {
contactos : FirebaseListObservable<any[]>
  constructor(af: AngularFire) {
          this.contactos = af.database.list('/contactos');

  }

}
