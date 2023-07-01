import { useRouter } from 'next/router'

export function useDebugMode() {
  const {query: {debug}} = useRouter();
  
  return {
    isDebugMode: Boolean(debug),
    getWaitTime: (time) => debug ? time / 10 : time,
  };
}
