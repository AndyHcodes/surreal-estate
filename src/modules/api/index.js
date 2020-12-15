/* import sleep from "sleep-promise"; */
import axios from "axios";

const api = async (connection) => {
  /* process.env.NODE_ENV === "development" && (await sleep(5000)); */
  const response = await axios({ ...connection });
  return response;
};

export default api;
