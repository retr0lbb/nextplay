"use client";

import { useCallback, useEffect, useRef } from "react";

export function useInfiniteScroll(
  fetchData: () => void,
  hasMore: boolean,
  scrollRootRef: React.RefObject<HTMLElement | null>,
) {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      console.log(entries);
      const isIntersecting = entries[0]?.isIntersecting;

      if (isIntersecting && hasMore) {
        fetchData();
      }
    },
    [fetchData, hasMore],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: no use
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: scrollRootRef?.current,
      rootMargin: "200px",
      threshold: 0,
    });
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return { loadMoreRef };
}
