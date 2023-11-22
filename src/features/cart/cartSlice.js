import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rooms: [],
    totalQuantity: 0,
    totalPrice: 0,
    roomTypes: {},
    selectedRoom: {}
}

const addToCart = (state, cartValue) => {
    const existingRoomIndex = state.rooms.findIndex(room => room.roomType === cartValue.roomType);
  
    if (existingRoomIndex !== -1) {
      const updatedRooms = state.rooms.map((room, index) => {
        if (index === existingRoomIndex) {
          return {
            roomType: cartValue.roomType,
            pricePerNight: cartValue.pricePerNight,
            quantity: parseInt(cartValue.quantity),
          };
        }
        return room;
      });
  
      const totalQuantity = updatedRooms.reduce((total, room) => total + room.quantity, 0);
      const totalPrice = updatedRooms.reduce((total, room) => total + room.pricePerNight * room.quantity, 0);
  
      return {
        ...state,
        rooms: updatedRooms.filter(room => room.quantity > 0),
        totalQuantity,
        totalPrice,
      };
    } else {
      if (parseInt(cartValue.quantity) > 0) {
        let newRoom = {
          roomType: cartValue.roomType,
          pricePerNight: cartValue.pricePerNight,
          quantity: parseInt(cartValue.quantity),
        };
  
        const updatedRooms = [...state.rooms, newRoom];
        const totalQuantity = updatedRooms.reduce((total, room) => total + room.quantity, 0);
        const totalPrice = updatedRooms.reduce((total, room) => total + room.pricePerNight * room.quantity, 0);
  
        return {
          ...state,
          rooms: updatedRooms,
          totalQuantity,
          totalPrice,
        };
      } else {
        return state;
      }
    }
  };
  

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addRoomToCart : (state,{payload}) => {
            return addToCart(state,payload)
        },
        addAllRoomTypes: (state,{payload}) => {
          // return {
          //   ...state,
          //   roomTypes: payload
          // }
          state.roomTypes = payload
        } ,
        addSelectedRoom : (state,{payload}) => {
          state.selectedRoom = payload;
        }
    }
})

export const { addRoomToCart,addAllRoomTypes,addSelectedRoom } = cartSlice.actions;

export default cartSlice.reducer;