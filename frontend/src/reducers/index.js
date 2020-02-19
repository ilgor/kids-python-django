import { combineReducers } from "redux";

import errors from "./errors";
import messages from "./messages";
import leads from "./leads";
import auth from "./auth";

export default combineReducers({
  errors,
  messages,
  leads,
  auth
});
