import React from "react";

/**
 * The layout for auth pages, such as the sign in and log in pages.
 * @param children
 * @constructor
 */
export default function SignLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <div className={'header'}><p>Header</p></div>
        <main>{children}</main>
      <div className={'footer'}><p>Footer</p></div>
      </>
  )
}