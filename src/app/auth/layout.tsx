import React from "react";
import Header from "@/app/ui/header";

/**
 * The layout for auth pages, such as the sign in and log in pages.
 * @param children
 * @constructor
 */
export default function SignLoginLayout({children}: {children: React.ReactNode}) {
  return (
      <>
          <Header isLandingHeader={true}/>
          <main>{children}</main>
      </>
  )
}