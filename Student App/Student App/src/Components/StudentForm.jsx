import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import trash from "../assets/trash.svg"
import edit from "../assets/edit.svg"

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dob: Yup.date().required("Date of Birth is required").nullable(),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  phone: Yup.string().matches(/^[0-9]{10}$/, "Must be a 10-digit number").required("Required"),
  country: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
});

const StudentForm = () => {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    gender: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editIndex === null) {
      setStudents([...students, values]);  // Add new student
    } else {
      const updatedStudents = students.map((student, index) =>
        index === editIndex ? values : student
      );
      setStudents(updatedStudents);  // Update existing student
      setEditIndex(null);  // Reset edit mode
    }
    resetForm();
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5 text-2xl font-mono">Student Registration Form</h1>
      <Formik
        initialValues={editIndex !== null ? students[editIndex] : initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex justify-center flex-wrap">
            <div className="form-group mx-3">
              <label className="mx-2 font-serif">First Name:</label>
              <Field type="text" name="firstName" placeholder= "first" className="form-control border-2 border-slate-700 rounded p-2 w-60"/>
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>

            <div className="form-group">
              <label className="mx-1 font-serif">Last Name:</label>
              <Field type="text" name="lastName" placeholder= "last" className="form-control border-2 border-slate-700 rounded p-2 w-56" />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>
            </div>

            <div className="form-group text-center my-4">
              <label className="mx-2 font-serif">Date of Birth:</label>
              <Field type="date" name="dob" className="form-control border-2 border-black rounded p-2 md:w-1/2 w-60" />
              <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>

            <div className="flex justify-center flex-wrap">
            <div className="form-group mx-3">
              <label className="mx-2 font-serif ml-10">Email:</label>
              <Field type="text" name="email" placeholder= "email" className="form-control border-2 border-slate-700 rounded p-2 w-60"/>
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>

            <div className="form-group">
              <label className="mx-1 font-serif">Password:</label>
              <Field type="text" name="password" placeholder= "password" className="form-control border-2 border-slate-700 rounded p-2 w-60" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>
            </div>


            <div className="flex justify-center my-4 flex-wrap">
            <div className="form-group">
              <label className="mx-2 font-serif">Phone:</label>
              <Field type="text" name="phone" className="mr-24 p-2 form-control border-2 border-black rounded w-60" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>

            <div className="form-group my-3">
              <label className="mx-2 font-serif">Country:</label>
              <Field as="select" name="country" className="form-control bg-slate-300 rounded">
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </Field>
              <ErrorMessage name="country" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>
            </div>

        
            <div className="form-group flex justify-center">
              <label className="mx-2 font-serif">Gender:</label>
              <div className="form-check">
                <Field type="radio" name="gender" value="Male" className="form-check-input font-mono mx-1 cursor-pointer" />
                Male
              </div>
              <div className="form-check ml-5">
                <Field type="radio" name="gender" value="Female" className="form-check-input font-mono mx-1 cursor-pointer" />
                Female
              </div>
              <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mx-2 font-extralight text-center" />
            </div>
        

            <button type="submit" className="btn bg-red-700 p-2 font-semibold text-white rounded-lg w-1/2 my-6 mx-80">
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </Form>
        )}
      </Formik>

      {/* Student List */}
      <h2 className="text-center my-4 font-bold">Student List</h2>
      {students.length === 0 ? (
        <p className="text-center">No students added yet.</p>
      ) : (
        <ul className="list-group flex justify-center flex-wrap gap-5 my-6 text-white font-bold font-mono">
          {students.map((student, index) => (
            <li key={index} className="list-group-item bg-blue-400 p-3 rounded mx-4 w-1/2">
              {student.firstName} {student.lastName} - {student.dob} - {student.email} - {student.phone} - {student.country} - {student.gender} 
              <button className="btn text-red-800 mx-4" onClick={() => handleEdit(index)}>
               <img src={edit} alt="" />
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>
              <img src={trash} alt="" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentForm;