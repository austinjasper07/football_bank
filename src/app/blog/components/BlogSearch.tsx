'use client';
import { ChangeEvent } from 'react';

interface BlogSearchProps {
  value: string;
  onChange: (val: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-1/4 px-4 py-3 border border-divider rounded-lg mb-6 text-primary-text"
      placeholder="Search blog titles..."
    />
  );
}
