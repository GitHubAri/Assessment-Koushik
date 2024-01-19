import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { PersonalDetailsSchema } from '../schemas';

const PersonalDetailsStep: React.FC = () => {
  const { values, handleChange, handleBlur, touched, errors } = useFormikContext();

  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      {/* Add other personal details fields here */}
    </div>
  );
};

export default PersonalDetailsStep;
