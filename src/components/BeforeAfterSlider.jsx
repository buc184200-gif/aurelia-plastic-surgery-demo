import React, { useState, useRef, useCallback } from 'react';
import { getImage } from '../data/images';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfterSlider({
  preImageKey,
  postImageKey,
  aspectRatio = '4/3',
  title = 'Illustrative Demo Case',
  subtitle = 'Comparison presentation'
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const preUrl = getImage(preImageKey);
  const postUrl = getImage(postImageKey);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div style={{ position: 'relative', width: '100%', userSelect: 'none' }}>
      
      {/* Top Banner Notice */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <span className="eyebrow" style={{ color: 'var(--color-taupe)', fontSize: '0.6875rem' }}>
          {title}
        </span>
        <span style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: '0.625rem', 
          fontWeight: 700, 
          letterSpacing: '0.14em', 
          textTransform: 'uppercase', 
          padding: '2px 8px', 
          background: 'rgba(193, 167, 135, 0.15)', 
          color: 'var(--color-charcoal)', 
          border: '1px solid rgba(193, 167, 135, 0.4)',
          borderRadius: '2px'
        }}>
          ILLUSTRATIVE DEMO CASE
        </span>
      </div>

      {/* Main Slider Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: aspectRatio,
          overflow: 'hidden',
          cursor: 'ew-resize',
          backgroundColor: '#252725',
          border: '1px solid var(--color-hairline)'
        }}
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after comparison slider"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(0, prev - 5));
          if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(100, prev + 5));
        }}
      >
        {/* Post-Operative Image (Background) */}
        <img
          src={postUrl}
          alt="Post-operative illustrative representation"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Pre-Operative Image (Clipped Foreground) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: `${sliderPosition}%`,
            overflow: 'hidden',
            borderRight: '1px solid #FAF8F4'
          }}
        >
          <img
            src={preUrl}
            alt="Pre-operative illustrative representation"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              maxWidth: 'none',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Pre-Operative Label */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              backgroundColor: 'rgba(37, 39, 37, 0.85)',
              color: '#FAF8F4',
              padding: '4px 8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            PRE-OPERATIVE
          </div>
        </div>

        {/* Post-Operative Label */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            backgroundColor: 'rgba(37, 39, 37, 0.85)',
            color: '#FAF8F4',
            padding: '4px 8px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.625rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          POST-OPERATIVE
        </div>

        {/* Hairline Divider & Drag Handle */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            width: '2px',
            backgroundColor: '#FAF8F4',
            transform: 'translateX(-50%)',
            pointerEvents: 'none'
          }}
        >
          <div
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${title} comparison slider`}
            onMouseDown={handleMouseDown}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setSliderPosition((prev) => Math.max(0, prev - 5));
              } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                setSliderPosition((prev) => Math.min(100, prev + 5));
              } else if (e.key === 'Home') {
                e.preventDefault();
                setSliderPosition(0);
              } else if (e.key === 'End') {
                e.preventDefault();
                setSliderPosition(100);
              }
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#252725',
              border: '2px solid #FAF8F4',
              color: '#FAF8F4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
              pointerEvents: 'auto',
              cursor: 'ew-resize',
              outline: 'none'
            }}
          >
            <ChevronsLeftRight size={16} />
          </div>
        </div>
      </div>

      {/* Subtitle / Interactive hint */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.6rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>
          {subtitle}
        </span>
        <span style={{ fontSize: '0.6875rem', color: 'var(--color-taupe)', fontStyle: 'italic' }}>
          Drag divider or use ← → arrow keys
        </span>
      </div>
    </div>
  );
}
