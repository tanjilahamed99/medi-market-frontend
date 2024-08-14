import { BASE_URL } from "@/utils/url";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// export const fetchVendorProducts = createAsyncThunk(
//   "venueData/fetchVenueData",
//   async ({ userId, venueId }: any) => {
//     const response = await fetch(
//       `${BASE_URL}/venue/single?userId=${userId}&venueId=${venueId}`
//     );
//     const data = await response.json();
//     return data;
//   }
// );

const initialState = {
  myCart: {
    userEmail: "",
    userName: "",
    myCartsData: [],
  },
  isPending: true,
  isRejected: false,
};

const myCartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    addItems: (state: any, { payload }: any) => {
      const { userName, userEmail, myCartsData } = payload;
      state.myCart.myCartsData = [...myCartsData];
      state.myCart.userName = userName;
      state.myCart.userEmail = userEmail;
    },
  },
  //   extraReducers: (builder: any) => {
  //     builder
  //       .addCase(fetchVendorProducts.pending, (state: any) => {
  //         state.isPending = true;
  //         state.isRejected = false;
  //         state.venuedata = [];
  //       })
  //       .addCase(
  //         fetchVendorProducts.fulfilled,
  //         (state: any, { payload }: any) => {
  //           state.isPending = false;
  //           state.isRejected = false;
  //           state.venuedata = { ...payload?.venue };
  //         }
  //       )
  //       .addCase(fetchVendorProducts.rejected, (state: any) => {
  //         state.isPending = false;
  //         state.isRejected = true;
  //         state.venuedata = [];
  //       });
  //   },
});

export const { addItems } = myCartSlice.actions;

export default myCartSlice.reducer;
