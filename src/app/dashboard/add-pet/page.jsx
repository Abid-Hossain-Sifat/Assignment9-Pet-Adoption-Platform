"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { getApiUrl } from "@/lib/api-helper";
import {
  PlusCircle,
  Tag,
  Dog,
  Layers,
  Calendar,
  UserCheck,
  Image,
  HeartPulse,
  ShieldAlert,
  MapPin,
  CircleDollarSign,
  FileText,
  Mail,
  Activity,
  AlertCircle,
} from "lucide-react";

const DashAddPage = () => {
  const { data: session } = authClient.useSession();
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToastMessage = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const petData = {
      name: form.name.value,
      species: form.species.value,
      breed: form.breed.value,
      age: form.age.value,
      gender: form.gender.value,
      image: form.image.value,
      healthStatus: form.healthStatus.value,
      vaccinationStatus: form.vaccinationStatus.value,
      location: form.location.value,
      adoptionFee: parseFloat(form.adoptionFee.value) || 0,
      email: form.email.value,
      status: form.status.value,
      description: form.description.value,
    };

    try {
      const apiUrl = getApiUrl();
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      });

      const data = await response.json();

      if (response.ok && data.insertedId) {
        showToastMessage("Pet successfully listed for adoption!", "success");
        form.reset();
      } else {
        showToastMessage(data.message || "Failed to publish pet listing.", "error");
      }
    } catch (error) {
      console.error("Error submitting pet data:", error);
      showToastMessage("Failed to connect to the server.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs relative">

      {toast.show && (
        <div className="toast toast-top toast-end z-50 fixed top-4 right-4 animate-bounce">
          <div
            className={`alert ${toast.type === "success" ? "alert-success bg-teal-600 text-white" : "alert-error bg-rose-600 text-white"} shadow-lg rounded-xl flex items-center gap-2 p-4`}
          >
            {toast.type === "error" && <AlertCircle className="w-5 h-5" />}
            <span className="text-sm font-bold">{toast.message}</span>
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-6 sm:mb-8">
        <div className="h-9 w-9 sm:h-10 sm:w-10 bg-[#00685f]/10 text-[#00685f] rounded-xl flex items-center justify-center shrink-0">
          <PlusCircle className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">
            Add New Pet
          </h1>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
            Fill up the form below to list a companion for adoption.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Pet Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Tag size={18} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="e.g., Buddy, Milo"
                required
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Species
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Dog size={18} />
              </span>
              <select
                required
                name="species"
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all appearance-none"
              >
                <option value="">Select Species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Bird">Bird</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Breed
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Layers size={18} />
              </span>
              <input
                type="text"
                name="breed"
                placeholder="e.g., Golden Retriever, Persian"
                required
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Age
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Calendar size={18} />
              </span>
              <input
                type="text"
                name="age"
                placeholder="e.g., 2 Months, 1 Year"
                required
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Gender
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <UserCheck size={18} />
              </span>
              <select
                required
                name="gender"
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all appearance-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Image URL
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Image size={18} />
              </span>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/pet-image.jpg"
                required
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Health Status
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <HeartPulse size={18} />
              </span>
              <input
                type="text"
                name="healthStatus"
                placeholder="e.g., Healthy, Undergoing Treatment"
                required
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Vaccination Status
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <ShieldAlert size={18} />
              </span>
              <select
                required
                name="vaccinationStatus"
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all appearance-none"
              >
                <option value="Vaccinated">Vaccinated</option>
                <option value="Not Vaccinated">Not Vaccinated</option>
                <option value="Partially Vaccinated">
                  Partially Vaccinated
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              📍 Location
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <MapPin size={18} />
              </span>
              <input
                type="text"
                name="location"
                placeholder="e.g., Dhanmondi, Dhaka"
                required
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Adoption Fee (৳)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 font-bold text-gray-400 text-sm">
                ৳
              </span>
              <input
                type="number"
                name="adoptionFee"
                placeholder="0 for Free Adoption"
                required
                min="0"
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Owner / Shelter Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                value={session?.user?.email || ""}
                readOnly
                placeholder="shelter@example.com"
                required
                className="w-full bg-gray-100 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none cursor-not-allowed select-none text-slate-500 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Status
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Activity size={18} />
              </span>
              <select
                required
                name="status"
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all appearance-none"
              >
                <option value="Available">Available</option>
                <option value="Pending">Pending</option>
                <option value="Adopted">Adopted</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
            Description
          </label>
          <div className="relative">
            <span className="absolute top-3 left-3.5 text-gray-400">
              <FileText size={18} />
            </span>
            <textarea
              rows="5"
              placeholder="Write something about the pet's behavior, nature, habits, and why someone should adopt it..."
              required
              name="description"
              className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end pt-2 sm:pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto bg-[#00685f] cursor-pointer hover:bg-[#005049] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
          >
            <PlusCircle size={18} />
            {isSubmitting ? "Publishing..." : "Publish Pet Listing"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashAddPage;