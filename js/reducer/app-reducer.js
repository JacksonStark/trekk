const SET_USER = "SET_USER"
const SET_USER_TREKKS = "SET_USER_TREKKS"
const SET_TREKK = "SET_TREKK"
const SET_MARKERS = "SET_MARKERS"

export default function reducer(state, action) {
  switch (action.type) {

    case SET_USER:
      return { ...state, currentUser: action.value };
    
    case SET_USER_TREKKS: 
      return { ...state, userTrekks: action.value };

    case SET_TREKK:
      return { ...state, currentTrekk: action.value };

    case SET_MARKERS:
      return { ...state, currentMarkers: action.value };
  }
}

export {
  SET_USER,
  SET_USER_TREKKS,
  SET_TREKK,
  SET_MARKERS
}