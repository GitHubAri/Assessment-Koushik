import * as Yup from 'yup';

interface PersonalDetails {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId: string;
}

export const PersonalDetailsSchema = Yup.object<PersonalDetails>({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age must be a positive integer'),
  sex: Yup.string().required('Sex is required').oneOf(['Male', 'Female'], 'Invalid sex'),
  mobile: Yup.string()
    .required('Mobile is required')
    .matches(/^[6-9]\d{9}$/, 'Invalid Indian Mobile Number'),
  govtIdType: Yup.string()
    .required('Govt Issued ID Type is required')
    .oneOf(['Aadhar', 'PAN'], 'Invalid ID Type'),
//   govtId: Yup.string().when('govtIdType', {
//     is: 'Aadhar',
//     then: Yup.string()
//       .matches(
//         /^[2-9]\d{11}$/,
//         'Invalid Aadhar Number. It should have 12 numeric digits and should not start with 0 and 1.'
//       )
//       .nullable(),
//     otherwise: Yup.string()
//       .matches(
//         /^[A-Za-z0-9]{10}$/,
//         'Invalid PAN Number. It should be a ten-character long alpha-numeric string.'
//       )
//       .nullable(),
//   }),
});

// Define the AddressDetailsSchema as needed
