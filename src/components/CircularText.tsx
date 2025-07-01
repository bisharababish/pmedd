import React from 'react';

interface CircularTextProps {
    text: string;
    radius?: number;
    className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({ text, radius = 90, className = '' }) => {
    const characters = text.split('');
    const charCount = characters.length;
    const angleStep = 360 / charCount;
    const r = radius;
    const fontSize = 36;

    return (
        <svg
            width={r * 2 + fontSize * 2}
            height={r * 2 + fontSize * 2}
            viewBox={`0 0 ${r * 2 + fontSize * 2} ${r * 2 + fontSize * 2}`}
            className={`animate-spin-slow ${className}`}
            style={{ display: 'block', margin: '0 auto' }}
        >
            {characters.map((char, i) => {
                const angle = angleStep * i - 90;
                const x = r + fontSize + r * Math.cos((angle * Math.PI) / 180);
                const y = r + fontSize + r * Math.sin((angle * Math.PI) / 180);
                return (
                    <text
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={fontSize}
                        fill="currentColor"
                        transform={`rotate(${angle + 90}, ${x}, ${y})`}
                        style={{ fontWeight: 700, letterSpacing: 0.5 }}
                    >
                        {char}
                    </text>
                );
            })}
        </svg>
    );
};

export default CircularText; 