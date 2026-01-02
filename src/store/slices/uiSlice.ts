import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ActiveTab = "new" | "final" | "migrated";
export type SortKey = "price" | "volume24h" | "marketCap" | null;
export type SortDirection = "asc" | "desc";

interface UIState {
  activeTab: ActiveTab;
  sortKey: SortKey;
  sortDirection: SortDirection;
}

const initialState: UIState = {
  activeTab: "new",
  sortKey: null,
  sortDirection: "asc",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<ActiveTab>) {
      state.activeTab = action.payload;
      state.sortKey = null;
      state.sortDirection = "asc";
    },
    setSort(state, action: PayloadAction<SortKey>) {
      if (state.sortKey === action.payload) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = action.payload;
        state.sortDirection = "asc";
      }
    },
  },
});

export const { setActiveTab, setSort } = uiSlice.actions;
export default uiSlice.reducer;
