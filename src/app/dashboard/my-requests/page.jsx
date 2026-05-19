"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { 
  GitPullRequest, 
  Inbox, 
  ArrowRight, 
  Loader2, 
  Calendar, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Heart,
  ExternalLink,
  Trash2,
  AlertTriangle
} from 'lucide-react';

const DashReqPage = () => {
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  
  // Deletion Modal state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedRequestForDelete, setSelectedRequestForDelete] = useState(null);

  const fetchMyRequests = async () => {
    if (!session?.user?.email) return;
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2006/pets";
      const apiUrl = `${baseUrl.replace(/\/pets$/, '')}/adoption-requests?requesterEmail=${session.user.email}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setRequests(data);
      }
    } catch (error) {
      console.error("Error fetching my requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetchMyRequests();
    } else if (!sessionPending && !session) {
      setLoading(false);
    }
  }, [session, sessionPending]);

  const triggerDeleteRequest = (request) => {
    setSelectedRequestForDelete(request);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteRequest = async () => {
    if (!selectedRequestForDelete) return;
    
    const id = selectedRequestForDelete._id;
    setDeletingId(id);
    setShowDeleteConfirm(false);
    
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2006/pets";
      const apiUrl = `${baseUrl.replace(/\/pets$/, '')}/adoption-requests/${id}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      if (response.ok) {
        setRequests(requests.filter((req) => req._id !== id));
      } else {
        alert("Failed to delete adoption request.");
      }
    } catch (error) {
      console.error("Error deleting request:", error);
      alert("Error connecting to server.");
    } finally {
      setDeletingId(null);
      setSelectedRequestForDelete(null);
    }
  };

  if (sessionPending || loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#00685f]/10 text-[#00685f] rounded-xl flex items-center justify-center">
              <GitPullRequest size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-800">My Requests</h1>
              <p className="text-xs text-gray-400">Loading your adoption requests...</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {[1, 2].map((n) => (
            <div key={n} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs animate-pulse flex flex-col md:flex-row gap-6">
              <div className="h-32 w-full md:w-32 bg-slate-100 rounded-2xl"></div>
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-slate-200 rounded-md w-1/4"></div>
                <div className="h-4 bg-slate-200 rounded-md w-1/3"></div>
                <div className="h-12 bg-slate-200 rounded-md w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="bg-white border border-gray-100 rounded-3xl p-12 shadow-xs flex flex-col items-center justify-center text-center min-h-[400px]">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Access Denied</h3>
        <p className="text-sm text-gray-400 max-w-sm mb-6">Please log in to view your adoption requests.</p>
        <Link href="/log-in" className="bg-[#00685f] hover:bg-[#005049] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs">
          Log In Now
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 relative">
      
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[#00685f]/10 text-[#00685f] rounded-xl flex items-center justify-center">
            <GitPullRequest size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">My Requests</h1>
            <p className="text-xs text-gray-400">Track the status of adoption applications you have submitted.</p>
          </div>
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-3xl p-12 shadow-xs flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="h-20 w-20 bg-[#f5faf8] rounded-full flex items-center justify-center text-gray-400 mb-6 border border-dashed border-[#00685f]/20">
            <Inbox size={36} className="text-[#00685f]/60" />
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-2">No Requests Sent</h3>
          <p className="text-sm text-gray-400 max-w-sm mb-8 leading-relaxed">
            You haven't submitted any adoption requests yet. Explore our pets list and apply to adopt!
          </p>

          <Link 
            href="/all-pets"
            className="text-[#00685f] hover:text-[#005049] text-sm font-bold flex items-center gap-2 group transition-all"
          >
            View Available Pets 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn">
          {requests.map((request) => {
            const isApproved = request.status === 'approved';
            const isRejected = request.status === 'rejected';
            const isPending = request.status === 'pending';

            return (
              <div 
                key={request._id}
                className={`bg-white border rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center relative ${
                  isApproved ? 'border-emerald-200 bg-emerald-50/10' : 
                  isRejected ? 'border-slate-100 bg-slate-50/20 opacity-90' : 
                  'border-gray-100 bg-white'
                }`}
              >
                {/* Pet Image */}
                <div className="relative h-28 w-28 rounded-2xl overflow-hidden shadow-xs border border-gray-100 self-center md:self-auto flex-shrink-0">
                  <img 
                    src={request.petImage || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&auto=format&fit=crop&q=60"} 
                    alt={request.petName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&auto=format&fit=crop&q=60";
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 space-y-3 w-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="text-lg font-extrabold text-slate-800">{request.petName}</h3>
                      
                      {/* Status Badge */}
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 border ${
                        isApproved ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                        isRejected ? 'bg-rose-50 text-rose-700 border-rose-200' : 
                        'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        {isApproved && <CheckCircle2 size={12} />}
                        {isRejected && <XCircle size={12} />}
                        {isPending && <Clock size={12} />}
                        {request.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 font-medium">
                      <p className="flex items-center gap-1.5">
                        <Mail size={14} className="text-[#00685f]" />
                        <span>Owner: <strong className="text-slate-700">{request.ownerEmail}</strong></span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#00685f]" />
                        <span>Pickup Date: <strong className="text-slate-700">{request.pickupDate || 'Not specified'}</strong></span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100 text-xs text-slate-600">
                    <span className="text-[9px] uppercase font-extrabold text-gray-400 tracking-wider flex items-center gap-1 mb-1">
                      <MessageSquare size={10} /> Your Statement:
                    </span>
                    <p className="italic">"{request.whyAdopt}"</p>
                  </div>
                </div>

                {/* Action */}
                <div className="w-full md:w-auto flex flex-col gap-2 justify-center md:items-end self-stretch md:self-auto border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                  {isApproved ? (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center md:text-left space-y-2">
                      <p className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">Adopted Successfully! 🎉</p>
                      <p className="text-xs text-slate-600">Please contact the owner at <strong className="text-slate-800">{request.ownerEmail}</strong> to schedule pickup.</p>
                    </div>
                  ) : isRejected ? (
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      <p className="text-xs text-slate-400 italic text-center md:text-right px-2 mb-1">This request was rejected as another request was approved.</p>
                      <button
                        onClick={() => triggerDeleteRequest(request)}
                        disabled={deletingId === request._id}
                        className="py-2.5 px-5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 focus:outline-none shadow-xs"
                      >
                        {deletingId === request._id ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <>
                            <Trash2 size={14} />
                            Delete Request
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      <Link 
                        href={`/all-pets/${request.petId}`}
                        className="py-2.5 px-5 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        View Pet Page
                        <ExternalLink size={14} />
                      </Link>
                      <button
                        onClick={() => triggerDeleteRequest(request)}
                        disabled={deletingId === request._id}
                        className="py-2.5 px-5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 focus:outline-none shadow-xs"
                      >
                        {deletingId === request._id ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <>
                            <Trash2 size={14} />
                            Delete Request
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn animate-scaleUp">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle size={32} />
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-2">Delete Adoption Request</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Are you sure you want to delete and cancel your adoption request for <strong className="text-slate-700">"{selectedRequestForDelete?.petName}"</strong>? This action cannot be undone.
            </p>
            
            <div className="flex gap-3 w-full">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setSelectedRequestForDelete(null);
                }}
                className="flex-1 py-3 px-4 border border-gray-200 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-50 transition-colors"
              >
                No, Cancel
              </button>
              <button
                onClick={confirmDeleteRequest}
                className="flex-1 py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-colors shadow-md hover:shadow-lg"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DashReqPage;