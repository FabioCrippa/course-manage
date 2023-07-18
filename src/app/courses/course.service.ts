import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable ({
    providedIn: 'root'
})
export class CourseService {

    retriveAll(): Course[] {
        return COURSES;
    }

    retrieveById (id: number): Course {
        return COURSES.find((courseIterator: Course) => courseIterator.id === id);
    }

}

var COURSES: Course[] = [

    {
        id: 1,
        name: 'Angular',
        imageUrl: './assets/images/angular.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5,
        releaseDate: 'December, 2019',
        description: 'melhor curso da DIO'
    },
    {
        id: 2,
        name: 'Typescript',
        imageUrl: './assets/images/typescript.png',
        price: 59.99,
        code: 'XPS-8700',
        duration: 120,
        rating: 4.5,
        releaseDate: 'May, 2018',
        description: 'Tudo sobre métodos'
    },
    {
        id: 3,
        name: 'Java',
        imageUrl: './assets/images/java.png',
        price: 64.99,
        code: 'XPS-7045',
        duration: 120,
        rating: 3,
        releaseDate: 'April, 2017',
        description: 'Desenvolvendo app'
    },
    {
        id: 4,
        name: 'Javascript',
        imageUrl: './assets/images/javascript.png',
        price: 105.99,
        code: 'XPS-5000',
        duration: 120,
        rating: 4,
        releaseDate: 'January, 2019',
        description: 'Introdução a métodos'
    },
]