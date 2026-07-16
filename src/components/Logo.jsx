// components/AramLogo.js
import Image from 'next/image';

export default function Logo({ className = "w-auto h-10", textColor = "text-neutral-900" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* --- Logo Graphic ---
          Using the Next.js Image component for optimization.
          The graphic (referenced from your link) is a minimalist 'A' with a sewing needle element.
          We set priority to 'true' as it's likely a main brand element. */}
      <div className="relative w-10 h-10 shrink-0">
        <Image
        height={100}
        width={100}
          src="/image.png"
          alt="aram Fashion Logo"
          
          className="object-contain"
          priority={true}
        />
      </div>

      {/* --- Text Branding ---
          Styled to reflect the 'aram Fashion' brand identity. */}
      <div className="flex flex-col">
        {/* Main brand name: aram */}
        <span className={`font-bold text-2xl tracking-tight ${textColor}`}>
          aram
        </span>
        
        {/* Subtitle: Fashion (Subtle, smaller, slightly lighter weight) */}
        {/* Using a standard Tailwind neutral color for balance. */}
        <span className="font-light text-sm tracking-wider text-neutral-600 -mt-1 uppercase">
          Fashion
        </span>
      </div>
    </div>
  );
}