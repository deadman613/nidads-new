"use client";

import { usePathname } from "next/navigation";

/**
 * Forces a complete React unmount + remount of page content on every
 * client-side navigation by changing the React `key`.
 *
 * Why this is needed:
 * Browser extensions with DOM access (e.g. "Detailed SEO Extension") inject
 * extra <div>, <span>, or attribute nodes directly into the page. When Next.js
 * does client-side navigation, React tries to RECONCILE the existing DOM
 * (now containing extension nodes) with the new page's virtual DOM. The
 * positions no longer match, so React's insertBefore call fails with
 * "NotFoundError: The node before which the new node is to be inserted is not
 * a child of this node."
 *
 * By keying on `pathname`, React fully discards the old DOM subtree and
 * mounts a completely fresh one — extension nodes are gone, no reconciliation
 * conflict, no error.
 *
 * Trade-off: page content flashes/unmounts on navigation instead of morphing.
 * The Navbar and Footer are OUTSIDE this wrapper and are unaffected.
 */
export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} id="page-transition-root">
      {children}
    </div>
  );
}
