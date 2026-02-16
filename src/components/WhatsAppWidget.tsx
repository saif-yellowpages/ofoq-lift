import { useState } from "react";

const WhatsAppWidget = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/966501080031"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center shadow-lg transition-all duration-300 overflow-hidden"
      style={{ width: hovered ? "auto" : "3.5rem", paddingRight: hovered ? "1.25rem" : "0" }}
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7"
          fill="white"
        >
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16.002c0 3.502 1.14 6.742 3.07 9.372L1.06 31.316l6.156-1.97A15.933 15.933 0 0016.004 32C24.826 32 32 24.826 32 16.002 32 7.174 24.826 0 16.004 0zm9.318 22.596c-.39 1.1-1.932 2.014-3.17 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.97-7.826-6.81-8.064-7.124-.23-.314-1.932-2.574-1.932-4.908 0-2.334 1.222-3.48 1.656-3.956.39-.432.922-.594 1.222-.594.152 0 .314.008.46.014.39.018.586.042.844.654.324.762 1.11 2.716 1.208 2.912.1.196.194.452.042.724-.142.28-.232.452-.452.696-.222.244-.462.544-.66.73-.222.21-.452.438-.194.862.258.424 1.148 1.89 2.464 3.062 1.694 1.51 3.12 1.978 3.562 2.198.324.16.714.136.978-.136.336-.348.75-.926 1.172-1.496.3-.408.678-.46 1.036-.312.362.142 2.306 1.088 2.702 1.286.396.198.66.296.758.46.096.166.096.96-.294 2.06z" />
        </svg>
      </div>
      <span
        className="text-white font-semibold text-sm whitespace-nowrap transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppWidget;
