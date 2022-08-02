import { TextCache } from './textCache/UpdateCache';

/**
 * An interface that has the common formatting value behavior as the {@link azMask}
 * and {@link azMaskGroup}.
 */
export interface AzMaskFormatter {
  formatValue: (text: string) => string;
  cache: TextCache;
}
