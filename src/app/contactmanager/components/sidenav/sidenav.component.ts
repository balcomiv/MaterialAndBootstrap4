import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  users: Observable<User[]>;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    //  Testing Only (remove when finished)
    this.users.subscribe(data => console.log(data));
  }

}
