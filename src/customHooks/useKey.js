import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function cleanUp(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", cleanUp);

      return function () {
        document.removeEventListener("keydown", cleanUp);
      };
    },
    [action, key]
  );
}
