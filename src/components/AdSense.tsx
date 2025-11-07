"use client";

import { useEffect } from "react";

interface AdSenseProps {
  adClient: string;
  adSlot: string;
  adFormat?: "auto" | "horizontal" | "vertical" | "rectangle";
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({ 
  adClient, 
  adSlot, 
  adFormat = "auto", 
  style = {}, 
  className = "" 
}: AdSenseProps) {
  useEffect(() => {
    try {
      // Push ad to Google AdSense
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{
        display: "block",
        ...style,
      }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}