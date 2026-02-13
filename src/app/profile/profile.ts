import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name: string = 'Yumi';
  email: string = 'example@gmail.com';
  age: number = 19;
  address: string = '121 upper Malvar St. Trancoville';
  school: string = 'University of Baguio';
  married: boolean = false;
}
