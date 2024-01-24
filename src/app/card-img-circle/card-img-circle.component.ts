import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-img-circle',
  templateUrl: './card-img-circle.component.html',
  styleUrls: ['./card-img-circle.component.css']
})

export class CardImgCircleComponent implements OnInit {
  @Input() title = '';
  @Input() text = '';
  @Input() srcImg = '';
  // @Input() urlRedirect = '';
  // @Input() imgCircle = false;
  constructor() { }

  ngOnInit(): void {
  }

}