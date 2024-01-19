import React from 'react';
import { useFormik } from 'formik';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PersonalDetailsStep from './PersonalDetailsStep';
import AddressDetailsStep from './AddressDetailsStep';
import StepperNavigation from './StepperNavigation';
import { RootState } from '../../redux/store';
import { PersonalDetailsSchema, AddressDetailsSchema } from './schemas';

const steps = ['Personal Details', 'Address Details'];

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state: RootState) => state.registration.activeStep);

  const formik = useFormik({
    initialValues: {
      // ... (previously defined initial values)
    },
    validationSchema: activeStep === 0 ? PersonalDetailsSchema : AddressDetailsSchema,
    onSubmit: (values) => {
      if (activeStep === 0) {
        dispatch(setPersonalDetails(values));
      } else {
        dispatch(setAddressDetails(values));
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && <PersonalDetailsStep />}
      {activeStep === 1 && <AddressDetailsStep />}

      <StepperNavigation />
    </form>
  );
};

export default RegistrationForm;
