import React from 'react';
import { allPets } from '../../lib/data'; 

const AllPetsPage = async () => {
  const pets = await allPets();

  return (
    <div>
      <div className="max-w-[80%] mx-auto mt-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold underline">🐾 All Pets Page</h1>
          <p className="mt-5 text-[24px]">
            Find your new best friend! Browse through our complete list of beautiful 
            pets waiting for a loving home and a family to belong to.
          </p>
          <h1 className="mt-5 btn btn-primary p-5">
            Available Pets: {pets?.length || 0}
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pets && pets.map((pet, index) => (
            <div key={pet._id || index} className="card bg-base-100 shadow-lg border border-gray-100 overflow-hidden flex flex-col justify-between">
              
              <div className="relative h-48 w-full bg-gray-100">
                <img 
                  src={pet.image || "https://via.placeholder.com/400x300?text=No+Image"} 
                  alt={pet.name} 
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-2 right-2 badge font-semibold p-3 ${
                  pet.status?.toLowerCase() === 'available' ? 'badge-success text-white' : 'badge-warning'
                }`}>
                  {pet.status || 'Available'}
                </span>
              </div>

              <div className="card-body p-5 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="card-title text-xl font-bold text-gray-800">{pet.name || 'Pet'}</h2>
                  <span className="badge badge-secondary font-bold py-3">Fee: ${pet.adoptionFee || '0'}</span>
                </div>

                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  {pet.species} • {pet.breed}
                </p>

                <div className="space-y-1 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <p><strong>Age:</strong> {pet.age}</p>
                  <p><strong>Gender:</strong> {pet.gender}</p>
                  <p className="truncate"><strong>📍 Location:</strong> {pet.location}</p>
                </div>

                <div className="card-actions mt-4">
                  <button className="btn btn-neutral btn-block text-white hover:opacity-90">
                    View Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {pets?.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No pets found at this moment.</p>
        )}
      </div>
    </div>
  );
};

export default AllPetsPage;