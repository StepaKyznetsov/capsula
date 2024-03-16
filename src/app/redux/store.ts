import { configureStore } from '@reduxjs/toolkit'
import eventsSlice from './features/eventsSlice'
import statisticsSlice from './features/statisticsSlice';

export const store = configureStore({
  reducer: {
    events: eventsSlice,
    statistics: statisticsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch