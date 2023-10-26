import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  confirmPassword = '';
  acceptTerms = false;

  constructor(private router: Router, private apiService: ApiService) { }

  onRegister(): void {
    if (this.user.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log(this.acceptTerms);

    if (!this.acceptTerms) {
      alert('Debe aceptar los términos y condiciones');
      return;
    }
    this.apiService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log('User registered:', response);
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.error('Error registering user:', err);
      }
    });


    
  }
}
