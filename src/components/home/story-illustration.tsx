export default function StoryIllustration() {
    return (
      <div className="relative w-full max-w-md">
        <svg viewBox="0 0 300 250" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Globe */}
          <circle cx="150" cy="80" r="40" fill="#A8D5CE" stroke="#4A9B8E" strokeWidth="3" />
  
          {/* Globe grid lines */}
          <ellipse cx="150" cy="80" rx="40" ry="20" fill="none" stroke="#4A9B8E" strokeWidth="2" />
          <ellipse cx="150" cy="80" rx="40" ry="10" fill="none" stroke="#4A9B8E" strokeWidth="1" />
          <line x1="110" y1="80" x2="190" y2="80" stroke="#4A9B8E" strokeWidth="2" />
          <line x1="150" y1="40" x2="150" y2="120" stroke="#4A9B8E" strokeWidth="2" />
          <ellipse cx="150" cy="80" rx="20" ry="40" fill="none" stroke="#4A9B8E" strokeWidth="2" />
  
          {/* People icons */}
          <g transform="translate(200, 120)">
            {/* Person 1 */}
            <circle cx="20" cy="15" r="12" fill="#4A9B8E" />
            <rect x="8" y="25" width="24" height="30" rx="12" fill="#A8D5CE" />
  
            {/* Person 2 */}
            <circle cx="45" cy="20" r="10" fill="#4A9B8E" />
            <rect x="35" y="28" width="20" height="25" rx="10" fill="#A8D5CE" />
  
            {/* Person 3 */}
            <circle cx="70" cy="25" r="8" fill="#4A9B8E" />
            <rect x="62" y="31" width="16" height="20" rx="8" fill="#A8D5CE" />
          </g>
  
          {/* Laptop */}
          <g transform="translate(80, 160)">
            <rect x="0" y="20" width="60" height="35" rx="3" fill="#4A9B8E" stroke="#3A7B70" strokeWidth="2" />
            <rect x="5" y="25" width="50" height="25" rx="2" fill="#A8D5CE" />
            <ellipse cx="30" cy="60" rx="35" ry="5" fill="#E8F6F3" />
          </g>
  
          {/* Connecting lines */}
          <line x1="150" y1="120" x2="200" y2="140" stroke="#4A9B8E" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="190" y1="80" x2="220" y2="130" stroke="#4A9B8E" strokeWidth="2" strokeDasharray="4,4" />
        </svg>
      </div>
    )
  }
  