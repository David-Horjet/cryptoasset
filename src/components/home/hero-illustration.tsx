export default function HeroIllustration() {
    return (
      <div className="relative w-full max-w-md lg:max-w-lg">
        <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circles and shapes */}
          <circle cx="120" cy="80" r="45" fill="#A8D5CE" opacity="0.3" />
          <rect x="280" y="40" width="60" height="60" rx="8" fill="#4A9B8E" opacity="0.8" />
          <rect x="290" y="140" width="50" height="50" rx="6" fill="#A8D5CE" />
  
          {/* Bitcoin symbol */}
          <circle cx="120" cy="80" r="35" fill="#4A9B8E" stroke="#3A7B70" strokeWidth="3" />
          <text x="120" y="90" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
            ₿
          </text>
  
          {/* Connecting dotted lines */}
          <line x1="155" y1="80" x2="200" y2="80" stroke="#4A9B8E" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="200" y1="80" x2="280" y2="70" stroke="#4A9B8E" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="315" y1="100" x2="315" y2="140" stroke="#4A9B8E" strokeWidth="2" strokeDasharray="5,5" />
  
          {/* Grid pattern */}
          <g transform="translate(50, 180)">
            {[...Array(4)].map((_, i) => (
              <g key={i}>
                {[...Array(6)].map((_, j) => (
                  <rect
                    key={j}
                    x={j * 15}
                    y={i * 15}
                    width="12"
                    height="12"
                    fill="none"
                    stroke="#4A9B8E"
                    strokeWidth="2"
                  />
                ))}
              </g>
            ))}
          </g>
  
          {/* Additional geometric shapes */}
          <rect x="200" y="160" width="40" height="25" rx="4" fill="#E8F6F3" stroke="#4A9B8E" strokeWidth="2" />
          <rect x="160" y="180" width="35" height="20" rx="3" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1" />
  
          {/* Connecting elements */}
          <circle cx="350" cy="200" r="20" fill="none" stroke="#4A9B8E" strokeWidth="3" />
          <circle cx="380" cy="230" r="15" fill="none" stroke="#4A9B8E" strokeWidth="2" />
          <line x1="350" y1="220" x2="365" y2="235" stroke="#4A9B8E" strokeWidth="2" strokeDasharray="3,3" />
        </svg>
      </div>
    )
  }
  