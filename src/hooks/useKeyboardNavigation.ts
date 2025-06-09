import { useEffect, useCallback } from 'react';

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  action: () => void;
  description: string;
}

export const useKeyboardNavigation = (shortcuts: KeyboardShortcut[]) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const matchingShortcut = shortcuts.find(
        (shortcut) =>
          shortcut.key.toLowerCase() === event.key.toLowerCase() &&
          !!shortcut.ctrlKey === event.ctrlKey &&
          !!shortcut.altKey === event.altKey &&
          !!shortcut.shiftKey === event.shiftKey
      );

      if (matchingShortcut) {
        event.preventDefault();
        matchingShortcut.action();
      }
    },
    [shortcuts]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return shortcuts.map(({ key, ctrlKey, altKey, shiftKey, description }) => ({
    key,
    ctrlKey,
    altKey,
    shiftKey,
    description,
  }));
}; 