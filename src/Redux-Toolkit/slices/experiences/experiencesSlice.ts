import { Experience } from "@/types/Experiences";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface expState {
    experience: Experience[];
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: expState = {
    experience: [],
    loading: false,
    error: null,
}

// Create async thunk for GET method
export const getExperiences = createAsyncThunk<Experience[]>("experienceSlice/fetchExperience",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<Experience[]>(`${process.env.NEXT_PUBLIC_API_URL as string}/experiences`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);

        }
    }
);

//Create Slice
const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getExperiences.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getExperiences.fulfilled, (state, action: PayloadAction<Experience[]>) => {
            state.loading = true;
            state.experience = action.payload;
        })
        .addCase(getExperiences.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
});

// Export reducer
export default experienceSlice.reducer;