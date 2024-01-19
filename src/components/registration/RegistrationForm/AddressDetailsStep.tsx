import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { AddressDetailsSchema } from '../schemas';

const AddressDetailsStep: React.FC = () => {
  const { values, handleChange, handleBlur, touched, errors } = useFormikContext();

  return (
    <div>
      <TextField
        label="Street"
        name="street"
        value={values.street}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.street && Boolean(errors.street)}
        helperText={touched.street && errors.street}
      />
      {/* Add other address details fields here */}
    </div>
  );
};

export default AddressDetailsStep;
