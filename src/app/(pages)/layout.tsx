import { ReactNode } from "react";

interface PagesLayoutProps {
  children: ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <div className="light bg-white" style={{ colorScheme: 'light' }}>
      {children}
    </div>
  );
}
