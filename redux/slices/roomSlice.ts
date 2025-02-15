import { Room } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoomState {
  rooms: Room[];
}

const initialState: RoomState = {
  rooms: [],
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<Room[]>) => {
      state.rooms = action.payload;
    },
    addRoom: (state, action: PayloadAction<Room>) => {
      state.rooms.push(action.payload);
    },
  },
});

export const { setRooms, addRoom } = roomSlice.actions;
export default roomSlice.reducer;
