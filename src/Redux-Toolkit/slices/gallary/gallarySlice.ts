import { GallaryItem } from "@/types/Gallary";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface gallaryState {
    gallary: GallaryItem[];
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: gallaryState = {
    gallary: [],
    loading: false,
    error: null,
}

// Create async thunk for GET method 
export const getGallary = createAsyncThunk<GallaryItem[]>("gallarySlice/fetchGallary",
    async (_, { rejectWithValue }) => {
        try {
const response = await axios.get<GallaryItem[]>(`${process.env.NEXT_PUBLIC_API_URL as string}/gallary`);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// Create slice
const gallarySlice = createSlice({
    name: "gallary",
    initialState,
    reducers: {},  //Used to add custom reducers if any
    extraReducers: (builder) => {
        builder
        .addCase(getGallary.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getGallary.fulfilled, (state, action: PayloadAction<GallaryItem[]>) => {
            state.loading = false;
            state.gallary = action.payload;
        })
        .addCase(getGallary.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
});

// Export reducer
export default gallarySlice.reducer;

