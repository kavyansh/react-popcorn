import { useEffect } from "react";

export function useKey(callback, code) {
  useEffect(
    function () {
      function eventCallback(e) {
        if (e.code.toLowerCase() === code.toLowerCase()) {
          callback();
        }
      }

      document.addEventListener("keydown", eventCallback);

      return () => document.removeEventListener("keydown", callback);
    },
    [callback, code]
  );
}
