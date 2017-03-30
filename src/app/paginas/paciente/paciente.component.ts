import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Router } from '@angular/router';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html'
})
export class PacienteComponent{
  pacientes : FirebaseListObservable<any[]>
    constructor(af: AngularFire,
                private router:Router
              ) {
            this.pacientes = af.database.list('/pacientes');

    }
    verHeroe(idx:number){
      this.router.navigate( ['/pacientedetalle',idx]);
    }

}
