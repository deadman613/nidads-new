"use client";

import { useEffect } from "react";

/**
 * Intercepts browser back/forward navigation (popstate) on the blog detail
 * page and forces a FULL PAGE RELOAD instead of Next.js client-side
 * reconciliation.
 *
 * WHY: Browser extensions like "Detailed SEO Extension" inject DOM nodes
 * into React's managed tree. When React tries to reconcile the extension-
 * modified DOM with the next page's virtual DOM, insertBefore fails because
 * React's internal fiber node references are stale/moved.
 *
 * HOW: { capture: true } makes this handler run in the CAPTURE PHASE —
 * BEFORE Next.js's bubble-phase popstate handler. We stop propagation so
 * Next.js never starts client-side navigation, then do window.location.reload()
 * which loads the destination page fresh (URL has already changed at popstate).
 *
 * IMPACT: Back/forward navigation from blog posts = full page load (~200ms
 * slower). Internal link clicks are NOT affected (pushState ≠ popstate).
 */
export default function BlogBackGuard() {
  useEffect(() => {
    const onPop = (e) => {
      // Stop Next.js's bubble-phase router from starting client-side nav
      e.stopPropagation();
      // URL has already changed to the destination page — reload it fresh
      window.location.reload();
    };

    // capture:true → runs before Next.js's bubble-phase popstate handler
    window.addEventListener("popstate", onPop, { capture: true });
    return () => window.removeEventListener("popstate", onPop, { capture: true });
  }, []);

  return null;
}
