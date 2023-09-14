import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import getUser, { getSession } from "../(actions)/getUser";

// userSlice.ts

interface UserData {
  name: string | null;
  surname: string | null;
  email: string | null;
  id?: string;
  emailVerified?: Date | null;
  image?: string | null;
  hashedPassword?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export const fetchUser = createAsyncThunk<UserData | null>(
  "user/fetchUser",
  async () => {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await getUser();

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toString(),
      updatedAt: currentUser.updatedAt.toString(),
    };
  }
);

// user slice'ını oluşturun
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null as UserData | null, // Nullable tip olarak başlatın
    loading: false,
    error: null,
  },

  reducers: {
    setUser(state, action: PayloadAction<UserData>) {
      state.data = action.payload;
    },
    clearUser(state) {
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<UserData | null>) => {
          state.loading = false;
          state.data = action.payload;
        }
      );
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
