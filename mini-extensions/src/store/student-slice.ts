import {StudentModel, StudentArrayModel} from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStudentState:StudentArrayModel={
    all_students:[],
    particular_student:{
        "id": 0,
        "name": "",
        "classes": ""
    }
}

const studentSlice=createSlice({
    name:'student',
    initialState:initialStudentState,
    reducers:{
        setStudents(state,action:PayloadAction<StudentModel[]>){
            state.all_students=action.payload;
        },
        setParticularStudent(state,action:PayloadAction<StudentModel>){
            state.particular_student=action.payload;
        }
    }
})

export default studentSlice;