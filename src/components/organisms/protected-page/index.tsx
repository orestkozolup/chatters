"use client";

import { useAuth } from "@/hooks/useAuth";

interface ProtectedPageProps {
  children: React.ReactElement;
}

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const { user } = useAuth();

  return user ? <>{children}</> : <p>Please log in to view this page</p>;
};
