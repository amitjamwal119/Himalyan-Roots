import { Room } from "@/types/Room";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface roomsState {
    rooms: Room[];
    selectedRoom: Room | null;  // field for slug
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: roomsState = {
    rooms: [],
    selectedRoom: null,     // field for slug
    loading: false,
    error: null,
};

// Create async thunk for GET Method - all the rooms
export const getRooms = createAsyncThunk<Room[]>("roomSlice/roomData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<Room[]>(`${process.env.NEXT_PUBLIC_API_URL as string}/rooms`);
            return response.data;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    });


// Create async thunk for GET method - single room details

export const getRoomBySlug = createAsyncThunk("roomSlice/roomSlugData",
    async (slug: string, { rejectWithValue }) => {
        try {
            const res = await axios.get<Room[]>(`${process.env.NEXT_PUBLIC_API_URL}/rooms?slug=${slug}`);
            return res.data[0]; // assuming API returns an array
        }
        catch (error: any) {
            return rejectWithValue(error.message);

        }
    }
)

// Create slice
const roomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},               //Used to add custom reducers if any
    extraReducers: (builder) => {
        builder
            //Cases for Whole Rooms
            .addCase(getRooms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRooms.fulfilled, (state, action: PayloadAction<Room[]>) => {
                state.loading = false;
                state.rooms = action.payload;
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Cases for perticular room

            .addCase(getRoomBySlug.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRoomBySlug.fulfilled, (state, action: PayloadAction<Room>) => {
                state.loading = false;
                state.selectedRoom = action.payload;
            })
            .addCase(getRoomBySlug.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

// Export reducer
export default roomSlice.reducer;