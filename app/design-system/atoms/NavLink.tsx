"use client"

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export interface NavLinkProps {
  href: string;
  children: string;
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
  const routerPathName = usePathname();
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(routerPathName === href)
  }, [routerPathName, href])
  
  return (
    <NextLink 
      href={href} 
      className={`hover:underline transition-all duration-200 ${isActive ? 'font-bold text-lpn-dark-blue' : 'font-semibold text-lpn-gray-text'}`} {...props}
    >
      {children}
    </NextLink>
  );
}
