import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
   skills: number[];
}

const initialState: FiltersState = {
   skills: [],
};

const filtersSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setSkill: (state, action: PayloadAction<number>) => {
         state.skills.push(action.payload);
      },
   },
});

export const { setSkill } = filtersSlice.actions;
export default filtersSlice.reducer;
