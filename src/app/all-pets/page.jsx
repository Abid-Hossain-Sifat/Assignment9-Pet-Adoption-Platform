"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  X,
  RotateCcw,
  Sparkles,
  Check,
} from "lucide-react";
import { AllPetsSkeleton } from "@/Components/SkeletonLoader";

const AVAILABLE_SPECIES = [
  { id: "dog", name: "Dogs" },
  { id: "cat", name: "Cats" },
  { id: "rabbit", name: "Rabbits" },
  { id: "bird", name: "Birds" },
  { id: "fish", name: "Fishes" },
];

const AllPetsPage = () => {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const [pets, setPets] = useState([]);
  const [userRequests, setUserRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setSearch(searchInput);
    }, 450); 

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchInput]);

  
  useEffect(() => {
    const loadPetsAndRequests = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        
        
        const queryParams = new URLSearchParams();
        
        if (search.trim()) {
          
          queryParams.set("search", search.trim());
        }
        
        if (selectedSpecies.length > 0) {
          
          queryParams.set("species", selectedSpecies.join(","));
        }
        
        queryParams.set("sortBy", sortBy);
        queryParams.set("sortOrder", sortOrder);

        const fetchUrl = `${baseUrl}?${queryParams.toString()}`;
        const res = await fetch(fetchUrl);
        
        if (res.ok) {
          const petsData = await res.json();
          setPets(petsData);
        }

        if (session?.user?.email) {
          const reqUrl = `${baseUrl.replace(/\/pets$/, "")}/adoption-requests?requesterEmail=${session.user.email}`;
          const reqRes = await fetch(reqUrl);
          if (reqRes.ok) {
            const reqData = await reqRes.json();
            setUserRequests(reqData);
          }
        }
      } catch (error) {
        console.error("Error loading pets or requests:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPetsAndRequests();
  }, [session, sessionPending, search, selectedSpecies, sortBy, sortOrder]);

  const handleSpeciesToggle = (speciesId) => {
    setSelectedSpecies((prev) =>
      prev.includes(speciesId)
        ? prev.filter((id) => id !== speciesId)
        : [...prev, speciesId]
    );
  };

  const handleResetFilters = () => {
    setSearchInput("");
    setSearch("");
    setSelectedSpecies([]);
    setSortBy("name");
    setSortOrder("asc");
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "price_asc") {
      setSortBy("adoptionFee");
      setSortOrder("asc");
    } else if (value === "price_desc") {
      setSortBy("adoptionFee");
      setSortOrder("desc");
    } else if (value === "age_asc") {
      setSortBy("age");
      setSortOrder("asc");
    } else if (value === "age_desc") {
      setSortBy("age");
      setSortOrder("desc");
    } else if (value === "name_desc") {
      setSortBy("name");
      setSortOrder("desc");
    } else {
      setSortBy("name");
      setSortOrder("asc");
    }
  };

  const currentSortValue = () => {
    if (sortBy === "adoptionFee") {
      return sortOrder === "asc" ? "price_asc" : "price_desc";
    }
    if (sortBy === "age") {
      return sortOrder === "asc" ? "age_asc" : "age_desc";
    }
    if (sortBy === "name") {
      return sortOrder === "desc" ? "name_desc" : "name_asc";
    }
    return "name_asc";
  };

  return (
    <div className="bg-[#f5faf8] py-8 md:py-16 min-h-screen">
      <div className="w-full max-w-[94%] sm:max-w-[88%] lg:max-w-[80%] mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-10 px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00685f]/10 text-[#00685f] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> PawsConnect Companion Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Find Your Perfect <span className="text-[#00685f] bg-gradient-to-r from-[#00685f] to-teal-600 bg-clip-text text-transparent">Companion</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Browse through our beautiful pets waiting for a loving home and a family to call their own.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xs border border-slate-200/50 mb-8 flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pets by name..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-slate-50 text-slate-800 pl-11 pr-10 py-3.5 rounded-2xl placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#00685f]/30 focus:bg-white transition-all duration-300 font-semibold text-sm"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600 transition-colors p-0.5 rounded-full hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting & Filter Actions */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center w-full lg:w-auto justify-end">
              
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 px-4 py-3 rounded-2xl w-full sm:w-auto">
                <ArrowUpDown className="text-gray-400 w-4 h-4 shrink-0" />
                <select
                  value={currentSortValue()}
                  onChange={handleSortChange}
                  className="bg-transparent text-slate-700 font-bold outline-none text-xs w-full cursor-pointer"
                >
                  <option value="name_asc">Name: A to Z</option>
                  <option value="name_desc">Name: Z to A</option>
                  <option value="price_asc">Adoption Fee: Low to High</option>
                  <option value="price_desc">Adoption Fee: High to Low</option>
                  <option value="age_asc">Age: Youngest First</option>
                  <option value="age_desc">Age: Oldest First</option>
                </select>
              </div>

              {(search || selectedSpecies.length > 0) && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center justify-center gap-1.5 border border-rose-200 hover:bg-rose-50 text-rose-600 font-bold px-4 py-3 rounded-2xl text-xs transition-all duration-200 cursor-pointer shadow-xs w-full sm:w-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Species Toggle Pills */}
          <div className="flex flex-col gap-2.5">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 pl-1">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filter by Species:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {AVAILABLE_SPECIES.map((species) => {
                const isSelected = selectedSpecies.includes(species.id);
                return (
                  <button
                    key={species.id}
                    onClick={() => handleSpeciesToggle(species.id)}
                    className={`px-4.5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-2xs border ${
                      isSelected
                        ? "bg-[#00685f] text-white border-transparent scale-95"
                        : "bg-slate-50 text-slate-600 hover:text-slate-800 hover:bg-slate-100 border-slate-200/60"
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    {species.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {loading || sessionPending ? (
          <AllPetsSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
              {pets &&
                pets.map((pet, index) => {
                  const userRequest = userRequests.find((req) => req.petId === pet._id);
                  const isOwner =
                    session?.user?.email &&
                    (session.user.email === pet.email || session.user.email === pet.ownerEmail);

                  const displayStatus = isOwner
                    ? pet.status || "Available"
                    : userRequest
                    ? userRequest.status === "approved"
                      ? "Adopted"
                      : userRequest.status === "rejected"
                      ? "Rejected"
                      : "Pending"
                    : pet.status || "Available";

                  const isPendingStatus = displayStatus.toLowerCase() === "pending";
                  const isAdoptedStatus = displayStatus.toLowerCase() === "adopted";
                  const isRejectedStatus = displayStatus.toLowerCase() === "rejected";

                  return (
                    <div
                      key={pet._id || index}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:border-teal-500/20 border border-[#00685f]/10 transition-all duration-300 flex flex-col justify-between group relative"
                    >
                      <div className="relative h-44 sm:h-48 w-full bg-gray-100 overflow-hidden">
                        <img
                          src={
                            pet.image ||
                            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60"
                          }
                          alt={pet.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src =
                              "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60";
                          }}
                        />
                        <span
                          className={`absolute top-3 right-3 px-3.5 py-1.5 rounded-full font-extrabold text-[10px] uppercase tracking-wider z-10 shadow-sm border border-white/20 ${
                            isAdoptedStatus
                              ? "bg-slate-500 text-white"
                              : isPendingStatus
                              ? "bg-[#fea619] text-white"
                              : isRejectedStatus
                              ? "bg-rose-500 text-white"
                              : "bg-[#00685f] text-white"
                          }`}
                        >
                          {displayStatus}
                        </span>
                      </div>

                      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                        <div className="mb-3">
                          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 truncate">
                            {pet.name || "Pet"}
                          </h2>
                          <p className="text-[10px] uppercase tracking-widest text-[#00685f] font-bold truncate">
                            {pet.species} • {pet.breed}
                          </p>
                        </div>

                        <div className="bg-[#f5faf8] border border-[#00685f]/10 rounded-xl p-3 mb-4 text-xs text-slate-600 space-y-2 flex-grow">
                          <p className="truncate">
                            <strong className="text-slate-800">Age:</strong> {pet.age}
                          </p>
                          <p className="truncate">
                            <strong className="text-slate-800">Gender:</strong> {pet.gender}
                          </p>
                          <p className="truncate">
                            <strong className="text-slate-800">📍 Location:</strong> {pet.location}
                          </p>
                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                            <span className="text-gray-400 font-medium">Adoption Fee:</span>
                            <span className="text-[#00685f] font-extrabold text-sm truncate pl-1">
                              ৳{pet.adoptionFee || "0"}
                            </span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <Link href={`/all-pets/${pet._id}`} className="block w-full">
                            <button className="w-full bg-[#00685f] hover:bg-[#005049] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 text-xs cursor-pointer">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {pets?.length === 0 && (
              <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-100 mt-6 flex flex-col items-center">
                <SlidersHorizontal className="text-[#00685f]/20 w-16 h-16 mb-4 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                  No Companions Found!
                </h3>
                <p className="text-sm text-gray-500 mb-6 max-w-md leading-relaxed font-medium">
                  We couldn't find any pets matching your current search or filter combinations. Try adjustment or resetting the filters!
                </p>
                <button
                  onClick={handleResetFilters}
                  className="flex items-center justify-center gap-2 bg-[#00685f] hover:bg-[#005049] text-white font-bold px-6 py-3 rounded-xl text-xs transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset All Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllPetsPage;