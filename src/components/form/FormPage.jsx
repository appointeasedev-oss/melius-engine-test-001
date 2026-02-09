import React, { useState } from "react";
import dotBack from '../../assets/formBack.png';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\\d{10,15}$/.test(formData.phone.replace(/\\D/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      setFormData({
        name: '',
        email: '',
        phone: '',
        skype: '',
        description: ''
      });
    }
  };

  return (
    <div className="p-4 py-15 md:py-30 lg:p-35 lg:py-25 flex flex-col gap-4 lg:gap-12 bg-zinc-100 md:flex-row md:justify-center mt-22 w-full max-w-[1600px] mx-auto">
      <div className="lg:h-fit md:w-[50%] lg:w-[40%] ">
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold">Drop us a line</h1>
        <p className="text-md mt-4 md:text-lg md:w-fit">
          Stay Ahead of Competition with an Intuative Mobile App for Your
          Business.
        </p>
        <img className="mt-5 hidden lg:inline" src={dotBack} alt="Dotted Background"/>
      </div>
      <form className="flex flex-col gap-4 mt-4 lg:w-[60%] px-2" onSubmit={handleSubmit}>
        <div className="inputCol flex gap-4">
          <div className="inputGap">
            <input
              className="w-full text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            <input
              className="w-full  text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div className="inputGap">
            <input
              className="w-full  text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone Number"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            <input
              className="w-full text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="text"
              name="skype"
              placeholder="Skype"
              value={formData.skype}
              onChange={handleChange}
              aria-label="Skype"
            />
          </div>
        </div>
        <input
          className="w-full border-b-1 text-md lg:text-lg border-zinc-400 py-2  outline-none"
          type="text"
          name="description"
          placeholder="Add Description"
          value={formData.description}
          onChange={handleChange}
          aria-label="Description"
        />
        {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
        <button
          className="uppercase px-8 py-2 lg:px-13 text-lg border-2 border-zinc-800 rounded-md w-fit mt-5 cursor-pointer bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;