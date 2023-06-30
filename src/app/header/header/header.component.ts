import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Userdata:any

  constructor(public authService:AuthService){
    // Get the data from local storage
const storedData = localStorage.getItem('UserData');
if (storedData) {
  const data = JSON.parse(storedData);
  // Use the retrieved data
  this.Userdata=data
  console.log('storedData',data.auth.user.name)
} 

  }

  

}
