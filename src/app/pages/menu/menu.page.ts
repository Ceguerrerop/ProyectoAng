import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  mensaje: string = "";

  constructor(private rutaActiva : ActivatedRoute) { 
    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['nombreUsuario'])
      {
        this.mensaje = params['nombreUsuario'];
      }
    })

  }

  ngOnInit() {
  }

}
