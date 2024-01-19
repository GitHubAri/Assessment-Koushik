import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { setPersonalDetails, setAddressDetails } from '../../../redux/actions/registrationActions';

const StepperNavigation: React.FC = () => {
  const { handleSubmit, isValid, setTouched, setSubmitting } = useFormikContext();
  const dispatch = useDispatch();

  const handleNext = () => {
    handleSubmit();
    if (isValid) {
      setTouched({});
      setSubmitting(false);
      dispatch({ type: 'INCREMENT_STEP' });
    }
  };

  const handleBack = () => {
    dispatch({ type: 'DECREMENT_STEP' });
  };

  return (
    <div>
      <Button disabled={activeStep === 0} onClick={handleBack}>
        Back
      </Button>
      <Button type="submit" variant="contained" color="primary" onClick={handleNext}>
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </div>
  );
};

export default StepperNavigation;
