
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate{
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // Obtener el rol del usuario
    const userRole = localStorage.getItem('role')?.toLowerCase();
  if (userRole !== 'admin') {
    this.router.navigate(['/login']); // O una página de "acceso denegado"
    return false;
  }

    return true;
  }
};
