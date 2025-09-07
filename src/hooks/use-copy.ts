// useClipboard.ts
import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
  /** How long to keep `copied` = true (ms). Set 0 to never auto-reset. */
  resetAfter?: number;
};

export function useClipboard(options: Options = {}) {
  const { resetAfter = 1500 } = options;

  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // SSR-safe support detection
  const isSupported =
    typeof window !== "undefined" &&
    (navigator?.clipboard?.writeText != null ||
      document?.queryCommandSupported?.("copy") === true);

  const timeoutRef = useRef<number | null>(null);

  // Clear any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const resetFlag = useCallback(() => {
    if (resetAfter > 0) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(
        () => setCopied(false),
        resetAfter
      );
    }
  }, [resetAfter]);

  const fallbackCopy = (text: string) => {
    // Create a hidden textarea for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);

    const selection = document.getSelection();
    const currentRange =
      selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    let ok = false;
    try {
      ok = document.execCommand("copy");
    } finally {
      document.body.removeChild(textarea);
      // Restore selection, if any
      if (currentRange && selection) {
        selection.removeAllRanges();
        selection.addRange(currentRange);
      }
    }
    if (!ok) throw new Error("Copy command was rejected.");
  };

  const copy = useCallback(
    async (text: string) => {
      setError(null);
      try {
        if (!isSupported) throw new Error("Clipboard copy is not supported.");

        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for older browsers or insecure contexts
          fallbackCopy(text);
        }

        setCopied(true);
        resetFlag();
        return true;
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        setError(err);
        setCopied(false);
        return false;
      }
    },
    [isSupported, resetFlag]
  );

  return { copy, copied, isSupported, error };
}
