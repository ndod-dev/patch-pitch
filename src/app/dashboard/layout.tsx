import React from "react";

/**
 * The layout page for a signed-in user. Components here are shown to the entire dashboard route.
 * @param children
 * @constructor
 */
export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
      <>
      <div className={'header'}><p>Header</p></div>
        <main>{children}</main>
      <div className={'footer'}><p>Footer</p></div>
      </>
  )
}