import Api from './Api';
import { StudentModel } from '../models/redux-models';

export default{
    async getAllStudents(){
        var response=await Api().get('students');
        return response.data;
    },
    async getParticularStudent(student_id:number){
        var response=await Api().get('students');
        return response.data.filter((student:StudentModel)=>student.id===student.id)[0];
    }
}