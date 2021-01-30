const initState = {
  therapists: null,
  therapistDetails: null,
};

const listReducers = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case "FETCH_THERAPISTS":
      newState = {
        ...state,
        therapists: action.data,
      };
      break;

    case "FETCH_THERAPIST_DETAILS":
      newState = {
        ...state,
        therapistDetails: action.data,
      };
      break;

    case "EDIT_THERAPIST":
      let { fullName, aboutMe, id } = action.data;

      const therapistToEdit = state.therapists.findIndex(
        (e) => e.therapistId === id
      );

      let newList = [...state.therapists];

      let editedTherapist = state.therapists[therapistToEdit];
      editedTherapist.aboutMe = aboutMe;
      editedTherapist.fullName = fullName;
      newList[therapistToEdit] = editedTherapist;

      newState = {
        ...state,
        newList: newList,
      };
      break;

    case "REMOVE_THERAPIST":
      const findTherapistToRemove = state.therapists.findIndex(
        (e) => e.therapistId === action.data
      );
      function removeTherapistData() {
        if (findTherapistToRemove !== -1) {
          let newTherapistList = [...state.therapists];
          newTherapistList.splice(findTherapistToRemove, 1);
          return newTherapistList;
        } else {
          return state.newTherapistList;
        }
      }
      const newAllItemsData = removeTherapistData();
      newState = {
        ...state,
        therapists: newAllItemsData,
      };
      break;

    default:
      return state;
  }
  return newState;
};

export default listReducers;
