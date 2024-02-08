import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() nameCourse='Pilates Matwork';

  

  constructor() { 
  }

  ngOnInit(): void {
  }

}
