import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component ({
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy!: string; /** underline: siginfica que esta variável só é válida neste componente */

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this._courses = this.courseService.retriveAll();
        this.filteredCourses = this._courses;

    }

    /**two way data binding(input) */
    set filter(value : string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 );
    }

    get filter() {
        return this._filterBy;
    }
    
}