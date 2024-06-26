import { shallow } from 'zustand/shallow';

import { useStore } from './useStore';
import type { ReactFlowStore } from '../types/store';
import { ConnectionState } from '@xyflow/system';

const selector = (s: ReactFlowStore) => ({
  ...s.connection,
});

/**
 * Hook for accessing the connection state.
 *
 * @public
 * @returns ConnectionState
 */
export function useConnection(): ConnectionState {
  return useStore(selector, shallow);
}
