import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit {

  @Input() title = ''; 
  @Input() text = ''; 
  @Input() srcImg = ''; 
  @Input() urlRedirect='';

  constructor() { }

  ngOnInit(): void {
  }

}
