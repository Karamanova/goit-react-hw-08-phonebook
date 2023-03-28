import { Notify } from "notiflix";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts, fetchAddContact, fetchDeleteContact, fetchEditContact } from "api/contactsApi";

// ================== INITIAL STATE
const initialState = {
  items: [],
  filter: '',
};

// ================== SELECTORS
export const getItems = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

// ================== ASYNC OPERATIONS
export const getAllContactsAsync = createAsyncThunk(
  'contacts/getAllContacts',
  async () => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const addNewContactAsync = createAsyncThunk(
  'contacts/addContacts',
  async (contact) => {
    try {
      await fetchAddContact(contact);
      Notify.success('Contact added!');
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      await fetchDeleteContact(id);
      Notify.success('Contact deleted!');
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const editContactAsync = createAsyncThunk(
  'contacts/editContact',
  async (contact) => {
    try {
      await fetchEditContact(contact);
      Notify.success('Contact edited!');
      const data = fetchAllContacts();
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

// ================== REDUSER
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getAllContactsAsync.fulfilled](state, action) {
      state.items = [...action.payload];
    },
    [addNewContactAsync.fulfilled](state, action) {
      state.items = [...action.payload];
    },
    [deleteContactAsync.fulfilled](state, action) {
      state.items = [...action.payload]
    },
    [editContactAsync.fulfilled](state, action) {
      state.items = [...action.payload]
    }
  },
  reducers: {
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  }
});

// ================== ACTIONS
export const { filterItems } = contactsSlice.actions;