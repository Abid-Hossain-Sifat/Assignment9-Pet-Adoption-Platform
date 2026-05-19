import React from 'react';
import { allPets } from '../../../lib/data';
import { 
  Heart, 
  MapPin, 
  ShieldCheck, 
  Activity, 
  DollarSign, 
  Mail, 
  Calendar, 
  ActivitySquare 
} from 'lucide-react';
import Link from 'next/link';

const PetDetailsPage = async ({ params }) => {

  const { id } = await params;

  const pets = await allPets();

  const pet = pets?.find((p) => p._id === id);

  if (!pet) {
    return (
      <div className="min-h-screen bg-[#f5faf8] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Pet Not Found!</h2>
        <p className="text-gray-600 mb-6">The pet you are looking for does not exist or has been adopted.</p>
        <Link href="/all-pets" className="bg-[#00685f] text-white px-6 py-2.5 rounded-xl font-semibold shadow-xs">
          Back to All Pets
        </Link>
      </div>
    );
  }

  const isPending = pet.status?.toLowerCase() === 'pending';

  return (
    <div className="bg-[#f5faf8] min-h-screen py-12">
      <div className="max-w-[80%] mx-auto">
        
        <div className="mb-6">
          <Link href="/all-pets" className="text-sm font-semibold text-[#00685f] hover:underline">
            ← Back to All Pets
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          
          <div className="lg:col-span-5">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xs">
              <img 
                src={pet.image || "https://via.placeholder.com/600x450?text=No+Image"} 
                alt={pet.name} 
                className="w-full h-full object-cover"
              />
              
              <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide capitalize ${
                isPending ? 'bg-[#fea619] text-white' : 'bg-[#00685f] text-white'
              }`}>
                {pet.status || 'Available'}
              </span>

              <button className="absolute top-4 right-4 p-2.5 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-xs transition-all">
                <Heart size={20} className="fill-none stroke-white stroke-[2.5]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-4xl font-extrabold text-slate-800">{pet.name}</h1>
                <span className="bg-[#eef7f5] text-[#00685f] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#00685f]/10">
                  {pet.species}
                </span>
              </div>
              
              <p className="flex items-center gap-1 text-gray-500 font-medium mb-6">
                <MapPin size={16} className="text-[#00685f]" />
                {pet.location}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#f5faf8] p-3.5 rounded-xl border border-gray-100 text-center">
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Breed</p>
                  <p className="text-sm font-bold text-slate-800 truncate">{pet.breed}</p>
                </div>
                <div className="bg-[#f5faf8] p-3.5 rounded-xl border border-gray-100 text-center">
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Age</p>
                  <p className="text-sm font-bold text-slate-800">{pet.age}</p>
                </div>
                <div className="bg-[#f5faf8] p-3.5 rounded-xl border border-gray-100 text-center">
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Gender</p>
                  <p className="text-sm font-bold text-slate-800">{pet.gender}</p>
                </div>
                <div className="bg-[#f5faf8] p-3.5 rounded-xl border border-gray-100 text-center">
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Fee</p>
                  <p className="text-sm font-bold text-[#00685f]">৳{pet.adoptionFee}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-100 text-sm font-semibold">
                  <Activity size={18} />
                  Health: {pet.healthStatus || "Healthy"}
                </div>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl border border-blue-100 text-sm font-semibold">
                  <ShieldCheck size={18} />
                  Vaccination: {pet.vaccinationStatus || "Vaccinated"}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-2">About {pet.name}</h3>
                <p className="text-gray-600 leading-relaxed">{pet.description}</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-[#00685f]/10 rounded-full flex items-center justify-center text-[#00685f]">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase">Contact Shelter</p>
                  <p className="text-sm font-bold text-slate-700">{pet.ownerEmail}</p>
                </div>
              </div>

              <button 
                disabled={isPending}
                className={`px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-xs ${
                  isPending 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-[#00685f] hover:bg-[#005049] text-white hover:shadow-md'
                }`}
              >
                {isPending ? 'Adoption Pending' : `Adopt ${pet.name} Now`}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PetDetailsPage;