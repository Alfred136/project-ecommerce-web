import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useLoading = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => setLoading(false);

    window.onbeforeunload = (e) => setLoading(true);
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
    }
  })

  return [loading, setLoading];
}