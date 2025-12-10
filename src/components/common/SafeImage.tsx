"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, 'src' | 'onError'> {
    src: string;
    fallbackSrc?: string;
}

/**
 * SafeImage component that handles image loading errors gracefully
 * Falls back to placeholder when remote image fails to load or times out
 */
export default function SafeImage({
    src,
    fallbackSrc = '/images/news-placeholder.png',
    alt,
    ...props
}: SafeImageProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            console.warn(`Failed to load image: ${src}, using fallback`);
            setImgSrc(fallbackSrc);
            setHasError(true);
        }
    };

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={handleError}
        />
    );
}
