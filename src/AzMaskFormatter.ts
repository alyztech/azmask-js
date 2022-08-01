/**
 * An interface that has the common formatting value behavior as the {@link azMask}
 * and {@link AzMaskGroup}.
 */
export interface AzMaskFormatter {
  (text: string): string;
}
