import { ReactNode } from "react";

interface ContentCardProps {
  children?: ReactNode;
  className?: string;
}

export default function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div className={`bg-spotify-dark rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}
