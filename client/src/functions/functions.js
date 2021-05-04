import axios from "axios";

const functions = {
  getListItems: async (listId) => {
    try {
      const { data } = await axios.get(`/api/lists/${listId}`);
      return data;
    } catch (error) {
      // TODO error handling
      throw error;
    }
  },
  getOwnerLists: async () => {
    try {
      const { data } = await axios.get(`/api/lists/`);
      return data;
    } catch (error) {
      // TODO error handling
      throw error;
    }
  },
};

export default functions;
