import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

	@Input() playerData: any;

  constructor() { }

  ngOnInit() {
  	console.log(this.playerData);
  }

}
