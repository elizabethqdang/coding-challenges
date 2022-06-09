interface IStudent {
    id: number
    name: string
    classes: string
}

type StudentState = {
    students: IStudent[]
}

type StudentAction = {
    type: string
    student: IStudent
}

type DispatchType = (args: StudentAction) => StudentAction

// interface IClass {
//     id: number
//     name: string
// }

// type ClassState = {
//     class: IClass[]
// }

// type ClassAction = {
//     type: string
//     class: IClass
// }

// type DispatchType = (args: ClassAction) => ClassAction