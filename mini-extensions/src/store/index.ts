import {configureStore} from '@reduxjs/toolkit';
import studentSlice from './student-slice';

const store=configureStore(
    {
        reducer:{student:studentSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;