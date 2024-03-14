import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EventsState {
  events: Record<string, unknown>[];
}

const initialState: EventsState = {
  events: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<number>) => {
      console.log();
    },
  },
});

// Action creators are generated for each case reducer function
export const { createEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
