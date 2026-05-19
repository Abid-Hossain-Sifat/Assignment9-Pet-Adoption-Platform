import React from "react";
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
} from "lucide-react";

const DashAddPage = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs">
      <div className="flex items-center gap-3 border-b border-gray-100 pb-5 mb-8">
        <div className="h-10 w-10 bg-[#00685f]/10 text-[#00685f] rounded-xl flex items-center justify-center">
          <PlusCircle size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Add New Pet
          </h1>
          <p className="text-xs text-gray-400">
            Fill up the form below to list a companion for adoption.
          </p>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="shelter@example.com"
                required
                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all"
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
              className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#00685f] focus:bg-white transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#00685f] hover:bg-[#005049] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
          >
            <PlusCircle size={18} />
            Publish Pet Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashAddPage;
