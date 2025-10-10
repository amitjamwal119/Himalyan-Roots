import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../slices/rooms/roomSlice";
import gallaryReducer from "../slices/gallary/gallarySlice";
import experienceReducer from "../slices/experiences/experiencesSlice";


export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    gallary: gallaryReducer,
    experiences: experienceReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
