"use client";

import { X } from "lucide-react";

const shortcuts = [
  ["→ / Space / Page Down", "Next slide"],
  ["← / Backspace / Page Up", "Previous slide"],
  ["Home / End", "First / last slide"],
  ["F", "Toggle fullscreen"],
  ["O", "Open overview"],
  ["N", "Toggle speaker notes"],
  ["P", "Open presenter mode"],
  ["number + Enter", "Jump to slide"],
  ["?", "Toggle this help"],
  ["Esc", "Close overlay or fullscreen"],
];

type KeyboardHelpProps = {
  readonly onClose: () => void;
};

export function KeyboardHelp({ onClose }: KeyboardHelpProps) {
  return (
    <dialog aria-labelledby="keyboard-help-title" className="modal-backdrop" open>
      <div className="keyboard-help">
        <header>
          <h2 id="keyboard-help-title">Keyboard controls</h2>
          <button aria-label="Close keyboard help" onClick={onClose} type="button"><X aria-hidden="true" /></button>
        </header>
        <dl>
          {shortcuts.map(([key, action]) => (
            <div key={key}><dt>{key}</dt><dd>{action}</dd></div>
          ))}
        </dl>
      </div>
    </dialog>
  );
}