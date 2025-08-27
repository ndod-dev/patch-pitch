import React from "react";

/**
 * Layout for displaying a quilt (collection of patches).
 * @param children
 * @constructor
 */
export default function QuiltLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <div className={'header'}><h1>Quilts Header</h1></div>
        <main>{children}</main>
      <div className={'footer'}><p>Footer</p></div>
      </>
  )
}