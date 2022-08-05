/**
 * An interface that has the common formatting value behavior as the {@link azMask}
 * and {@link azMaskGroup}.
 */
export interface AzMaskFormatter {
  formatValue: (text: string, func: (maskedText: string, unmaskedText: string) => void) => void;
}
