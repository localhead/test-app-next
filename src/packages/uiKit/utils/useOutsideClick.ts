import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

function useOutsideClick(
  refs: RefObject<HTMLElement>[],
  handler: Handler,
  enabled?: boolean
): void;
function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  enabled?: boolean
): void;
function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | RefObject<HTMLElement>[],
  handler: Handler,
  enabled?: boolean
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (Array.isArray(ref)) {
        if (
          !ref.some(
            (r) => r.current && r.current.contains(event.target as Node)
          )
        ) {
          handler(event);
        }
      } else {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler(event);
        }
      }
    };

    if (enabled) {
      document.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [enabled, handler, ref]);
}

export default useOutsideClick;
