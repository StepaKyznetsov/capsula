import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Event } from '@/types';

export interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [
    {
      id: 0,
      title: 'Поход к врачу',
      type: 'none',
      start: new Date(),
      end: new Date(),
    },
    {
      id: 1,
      title: 'Окрашивание',
      type: 'coloring',
      start: new Date(),
      end: new Date(),
    },
    {
      id: 2,
      title: 'Стрижка',
      type: 'haircut',
      start: new Date(),
      end: new Date(),
    },
    {
      id: 3,
      title: 'Окрашивание',
      type: 'coloring',
      start: new Date(),
      end: new Date(),
    },
    {
      id: 4,
      title: 'Окрашивание',
      type: 'haircut',
      start: new Date(),
      end: new Date(),
    },
  ],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
