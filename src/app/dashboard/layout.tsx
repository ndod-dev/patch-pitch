import React from "react";
import Header from "@/app/ui/header";

/**
 * The layout page for a signed-in user. Components here are shown to the entire dashboard route.
 * @param children
 * @constructor
 */
export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
      <>
          <Header/>
          <main>{children}</main>
          <div className={'footer'}><p>Footer</p></div>
      </>
  )
}