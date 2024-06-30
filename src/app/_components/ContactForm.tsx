"use client";
import React, { useState } from "react";
import { PowerIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define the type for error messages
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  // Initialize state with the defined type
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus("Submitting...");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("メッセージをありがとうございました！");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
    // setTimeout(() => {
    //   setFormStatus("");
    // }, 5000);
  };

  const clearFormStatus = () => {
    setFormStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 w-full">
      {formStatus && (
        <div
          className={`flex w-full items-center justify-between border-2 transition-all duration-500 opacity-60 ${
            isSubmitting ? "border-gray-500" : "border-green-500"
          } ${isSubmitting ? "bg-gray-100" : "bg-green-100"} p-3 mb-6`}
        >
          <p
            className={`text-center ${
              isSubmitting ? "text-gray-500" : "text-green-500"
            }`}
          >
            {formStatus}
          </p>
          <button
            className={` ${isSubmitting ? "text-gray-500" : "text-green-500"}`}
            onClick={clearFormStatus}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className="flex lg:hidden items-center justify-center mb-6">
        <span className="text-center text-black text-3xl">Contact Me</span>
      </div>
      <div className="mb-4">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full py-2 border-b-2 bg-transparent text-black ${
            errors.name ? "border-red-500" : "border-gray-300"
          } outline-none focus:border-black focus:text-3xl transition-all duration-500`}
        />
        {errors.name && (
          <div className="flex items-center justify-end text-red-500 text-xs  mt-2">
            <XMarkIcon className="h-4 w-4" />
            <span>{errors.name}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full py-2 border-b-2 bg-transparent text-black ${
            errors.email ? "border-red-500" : "border-gray-300"
          } outline-none focus:border-black focus:text-3xl transition-all  duration-500`}
        />
        {errors.email && (
          <div className="flex items-center justify-end text-red-500 text-xs  mt-2">
            <XMarkIcon className="h-4 w-4" />
            <span>{errors.email}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full py-2 border-b-2 bg-transparent text-black ${
            errors.subject ? "border-red-500" : "border-gray-300"
          } outline-none focus:border-black focus:text-3xl transition-all  duration-500`}
        />
        {errors.subject && (
          <div className="flex items-center justify-end text-red-500 text-xs  mt-2">
            <XMarkIcon className="h-4 w-4" />
            <span>{errors.subject}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={`w-full py-2 border-b-2 bg-transparent text-black ${
            errors.message ? "border-red-500" : "border-gray-300"
          } outline-none focus:border-black focus:text-3xl transition-all  duration-500`}
        />
        {errors.message && (
          <div className="flex items-center justify-end text-red-500 text-xs  mt-2">
            <XMarkIcon className="h-4 w-4" />
            <span>{errors.message}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-black hover:bg-gray-300 text-white font-bold py-2 px-4 transition duration-300 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Processing" : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
