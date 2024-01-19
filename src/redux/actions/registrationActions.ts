// Action types
export const INCREMENT_STEP = 'INCREMENT_STEP';
export const DECREMENT_STEP = 'DECREMENT_STEP';
export const SET_PERSONAL_DETAILS = 'SET_PERSONAL_DETAILS';
export const SET_ADDRESS_DETAILS = 'SET_ADDRESS_DETAILS';

// Action creators
export const incrementStep = () => ({
  type: INCREMENT_STEP,
});

export const decrementStep = () => ({
  type: DECREMENT_STEP,
});

export const setPersonalDetails = (personalDetails: any) => ({
  type: SET_PERSONAL_DETAILS,
  payload: personalDetails,
});

export const setAddressDetails = (addressDetails: any) => ({
  type: SET_ADDRESS_DETAILS,
  payload: addressDetails,
});
