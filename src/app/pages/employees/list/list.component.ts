import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  fakeData = [
    {
      name:'Manuel',
      lastName:'Perez',
      email:'me@gmail.com',
      startDate: '21/02/2020'
    },
    {
      name:'brahyan',
      lastName:'Perez',
      email:'me@gmail.com',
      startDate: '21/02/2020'
    },
    {
      name:'jessica',
      lastName:'Perez',
      email:'me@gmail.com',
      startDate: '21/02/2020'
    },
    {
      name:'jose',
      lastName:'Perez',
      email:'me@gmail.com',
      startDate: '21/02/2020'
    },
  ]
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoToDelete(item: any): void {
    alert('deleted');
  }
}
