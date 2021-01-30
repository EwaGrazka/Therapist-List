export const fetchTherapists = () => {
  return (dispatch) => {
    fetch(`https://twojpsycholog.pl/lb-proxy/api-market/open/therapists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ citySeoName: "ONLINE" }),
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_THERAPISTS", data: data.therapists })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
export const fetchTherapistDetails = (id) => {
  return (dispatch) => {
    fetch(
      `https://twojpsycholog.pl/lb-proxy/api-market/open/therapists/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_THERAPIST_DETAILS", data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const editTherapist = (fullName, aboutMe, id) => {
  console.log(fullName, aboutMe, id);
  let editedData = { fullName, aboutMe, id };
  return (dispatch) => dispatch({ type: "EDIT_THERAPIST", data: editedData });
};

export const removeTherapist = (id) => {
  return (dispatch) => dispatch({ type: "REMOVE_THERAPIST", data: id });
};
