import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../type/advantage.type";

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() i: number;

  constructor() {
    this.advantage = {
      title: '',
      description: '',
    }
    this.i = 0;
  }

  ngOnInit(): void {
  }

}
