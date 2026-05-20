"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: session, isPending } = authClient.useSession();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isPending) {
      if (!session) {
        const currentPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
        router.push(`/log-in?redirect=${encodeURIComponent(currentPath)}`);
      }
      setIsChecking(false);
    }
  }, [session, isPending, router, pathname, searchParams]);

  if (isPending || isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-[#00685f] animate-spin" />
          <p className="text-gray-600 font-medium">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (session) {
    return children;
  }

  return null;
};

export default ProtectedRoute;
