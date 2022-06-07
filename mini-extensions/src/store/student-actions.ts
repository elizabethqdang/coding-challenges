import studentSlice from './student-slice';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { StudentModel } from '../models/redux-models';
import studentService from '../service/studentService';

export const studentActions=studentSlice.actions

export const fetchStudents=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().student.all_students.length===0){
            const response:StudentModel[]=await studentService.getAllStudents();
            dispatch(studentActions.setStudents(response))
        
        }
    }
}

export const fetchParticularStudent=(student_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:StudentModel=await studentService.getParticularStudent(student_id);
        dispatch(studentActions.setParticularStudent(response))
    }
}