import { Component, OnInit } from '@angular/core';
import { faUserFriends, faBuilding, faArrowsAltH } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  icons = {
    "faUserFriends": faUserFriends, 
    "faBuilding": faBuilding,
    "faArrowsAltH": faArrowsAltH,
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
