import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";
import { ActivatedRoute } from "@angular/router";

@Component ({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    /** ponto de interrogação(?): faz com que o typescript identifica esse parâmetro como opcional*/
    
    course?: Course;
    // courseId: number;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void {
    // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')
        
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '');
        this.course = this.courseService.retrieveById(id);
                
    }
    /**crud: Create, Retrieve,  Update, Delete */
    save(): void {
        // this.courseService.save(this.course!);
    }

}