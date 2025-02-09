import axios from "axios";

export const fetchIPLocation = async () => {
  try {
    const response = await axios.get("http://ip-api.com/json");
    return response.data.city; // Directly access the data from the response
  } catch (error) {
    return `Something went wrong: ${error.message}`; // Make sure to access the error message
  }
};
