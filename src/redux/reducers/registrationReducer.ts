interface RegistrationState {
    activeStep: number;
    personalDetails: any; // Replace 'any' with the actual type of personalDetails
    addressDetails: any; // Replace 'any' with the actual type of addressDetails
  }
  
  const initialState: RegistrationState = {
    activeStep: 0,
    personalDetails: {},
    addressDetails: {},
  };
  
  const registrationReducer = (state = initialState, action: any): RegistrationState => {
    switch (action.type) {
      case 'INCREMENT_STEP':
        return { ...state, activeStep: state.activeStep + 1 };
      case 'DECREMENT_STEP':
        return { ...state, activeStep: state.activeStep - 1 };
      case 'SET_PERSONAL_DETAILS':
        return { ...state, personalDetails: action.payload };
      case 'SET_ADDRESS_DETAILS':
        return { ...state, addressDetails: action.payload };
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  