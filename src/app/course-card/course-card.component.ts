import { Component, EventEmitter, Input, OnInit,  Output } from '@angular/core';
import {COURSES} from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;


  
  // Crea el evento personalizado con tipo de datos necesario
  @Output('courseSelected')
  // dento de @Input se puede usar el nombre del evento 
  // personalizado usado en app.component  
  // que en esta funcion sera:   courseEmitter
  courseEmitter = new EventEmitter<Course>()

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {

    console.log("card component - button clicked ...");

    this.courseEmitter.emit(this.course);

  }

  
}
