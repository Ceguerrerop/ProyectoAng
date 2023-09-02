import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgitro', // Cambia 'app-registro' por 'app-resgitro'
  templateUrl: 'resgitro.page.html', // Cambia 'registro.page.html' por 'resgitro.page.html'
  styleUrls: ['resgitro.page.scss'], // Cambia 'registro.page.scss' por 'resgitro.page.scss'
})
export class ResgitroPage { // Cambia 'RegistroPage' por 'ResgitroPage'
  constructor(private router: Router) {}

  registrarse() {
    // Redirige a la página de inicio de sesión cuando se hace clic en el botón
    this.router.navigate(['/login']);
  }
}
