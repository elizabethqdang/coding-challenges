export interface StudentModel{
    "id": number,
    "name": string,
    "classes": string
    // "classesIds": string
}

export interface StudentArrayModel{
    all_students:StudentModel[],
    particular_student:StudentModel
}

export interface ClassModel{
    "id": number,
    "name": string,
    "students": string
    // "studentsIds": string
}

export interface ClassArrayModel{
    all_classes:ClassModel[],
    particular_class:ClassModel
}

