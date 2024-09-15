import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    address: '',
    zip: '',
    email: '',
    country: 'us',
    sex: '',
    language: [],
    about: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    // Basic validation rules
    if (!formData.userId) { formErrors.userId = 'User ID is required'; } else if (formErrors.length() < 7) {
      formErrors.userId = 'user id must be consist of 8 characters'
    }
    if (!formData.password) formErrors.password = 'Password is required';
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.zip) formErrors.zip = 'Zip Code is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.sex) formErrors.sex = 'Sex is required';
    
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        language: checked
          ? [...prevState.language, value]
          : prevState.language.filter((lang) => lang !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
      // Perform further actions like sending data to an API or resetting the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold '>User Registration Form</h2>
      <p className='text-center text-gray-600 text-sm'>Registered yourself here</p>

      {/* User ID */}
      <label className='mx-5 font-mono' htmlFor="userId">User ID:</label>
      <input
        className='border-2 w-2/4 mt-10 text-sm p-2 font-thin rounded'
        type="text"
        placeholder='Enter your Id'
        id="userId"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        required
      />
      {errors.userId && <p style={{ color: 'red' }}>{errors.userId}</p>}
      <br /><br />

      {/* Password */}
      <label className='mx-4 font-mono' htmlFor="password">Password:</label>
      <input
        className='border-2 w-2/4 text-sm p-2 font-thin rounded'
        type="password"
        id="password"
        placeholder='Enter your password'
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      <br /><br />

      {/* Name */}
      <label className='mx-8 font-mono' htmlFor="name">Name:</label>
      <input
        className='border-2 w-2/4 text-sm p-2 font-thin rounded'
        type="text"
        id="name"
        placeholder='Enter your name'
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      <br /><br />

      {/* Address */}
      <label className='mx-4 font-mono' htmlFor="address">Address:</label>
      <input
        className='border-2 w-2/4 text-sm p-2 font-thin rounded'
        type="text"
        id="address"
        placeholder='Enter your address'
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
      <br /><br />

      {/* Zip Code */}
      <label className='mx-3 font-mono' htmlFor="zip">Zip Code:</label>
      <input
        className='border-2 w-2/4 text-sm p-2 font-thin rounded'
        type="text"
        id="zip"
        placeholder='Enter zip code'
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        required
      />
      {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
      <br /><br />

      {/* Email */}
      <label className='mx-6 font-mono' htmlFor="email">Email:</label>
      <input
        className='border-2 w-2/4 text-sm p-2 font-thin rounded'
        type="email"
        placeholder='Enter your email'
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      <br /><br />

      {/* Country (Selection List) */}
      <label className='mx-4 font-mono' htmlFor="country">Country:</label>
      <select
        className='border-2 w-2/4 text-sm p-2 font-thin rounded'
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
      </select>
      <br /><br />

      {/* Sex (Radio Buttons) */}
      <label className='mx-4 font-semibold'>Sex:</label>
      <input
        type="radio"
        id="male"
        name="sex"
        value="male"
        checked={formData.sex === 'male'}
        onChange={handleChange}
      />
      <label className='font-mono mx-1' htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        name="sex"
        value="female"
        checked={formData.sex === 'female'}
        onChange={handleChange}
      />
      <label className='font-mono mx-1' htmlFor="female">Female</label>
      {errors.sex && <p style={{ color: 'red' }}>{errors.sex}</p>}
      <br /><br />

      {/* Language (Checkbox) */}
      <label className='mx-2 font-semibold'>Language:</label>
      <input
        type="checkbox"
        id="english"
        name="language"
        value="english"
        checked={formData.language.includes('english')}
        onChange={handleChange}
      />
      <label className='mx-1' htmlFor="english">English</label>
      <input
        type="checkbox"
        id="nonenglish"
        name="language"
        value="nonenglish"
        checked={formData.language.includes('nonenglish')}
        onChange={handleChange}
      />
      <label className='mx-1' htmlFor="nonenglish">Non-English</label>
      <br /><br />

      {/* About (Text Area) */}
      <label className='mx-2 text-2xl  font-bold rounded' htmlFor="about">About:</label><br />
      <textarea
        className='w-1/3 rounded'
        id="about"
        name="about"
        rows="4"
        cols="50"
        value={formData.about}
        onChange={handleChange}
      ></textarea>
      <br /><br />

      {/* Submit Button */}
      <input className='bg-neutral-300 p-2 rounded-lg' type="submit" value="Submit" />
    </form>
  );
};

export default Form;
