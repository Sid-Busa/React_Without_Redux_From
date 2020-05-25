import { toastr } from "react-redux-toastr";

export const createEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "CREATE_EVENT",
        payload: { event },
      });
      toastr.success("Success", "Event has been created");
    } catch (e) {
      toastr.error("Oops!", "Something went wrong");
    }
  };
};

export const updateEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_EVENT",
        payload: { event },
      });
      toastr.success("Success", "Event has been updated");
    } catch (e) {
      toastr.error("Oops!", "Something went wrong");
    }
  };
};
export const deleteEvent = (id) => {
  return {
    type: "DELETE_EVENT",
    payload: { id },
  };
};
