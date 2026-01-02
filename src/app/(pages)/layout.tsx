import { ReactNode } from "react";

interface PagesLayoutProps {
  children: ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return <>{children}</>;
}
