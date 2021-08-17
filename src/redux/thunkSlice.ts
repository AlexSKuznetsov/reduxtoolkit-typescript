import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk<Todo[]>("todos/fetch", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  const data: Todo[] = await response.json();
  return data;
});

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface InitialState {
  entities: Todo[];
  status: "done" | "idle" | "loading";
  error: string | null;
}

const initialState: InitialState = {
  entities: [],
  status: "idle",
  error: null,
};

const todosSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.error = action.error.message || "error";
      state.status = "idle";
    });
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(
      fetchTodos.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.entities = action.payload;
        state.status = "done";
        state.error = null;
      }
    );
  },
});

export default todosSlice.reducer;
