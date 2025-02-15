import { Booking } from "@/types/booking";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  bookings: Booking[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setBookings: (state, action: PayloadAction<Booking[]>) => {
      state.bookings = action.payload;
    },
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
    },
  },
});

export const { setBookings, addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
