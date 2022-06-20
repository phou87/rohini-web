import { useRouter } from 'next/router'

import {VERSIONS} from '../shared/constants'

export function useVersion() {
  const {query: {version}} = useRouter();
  const versions = Object.keys(VERSIONS);
  const latest = versions[versions.length - 1];

  if (!version) {
    return latest;
  }

  return VERSIONS[version] || latest;
}
