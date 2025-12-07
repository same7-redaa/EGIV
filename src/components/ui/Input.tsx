/**
 * Reusable Input Component
 */

import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-white mb-2 text-right text-sm md:text-base">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-[#1a1a1a] text-white rounded-lg p-3 md:p-4 border border-gray-800 focus:border-cyan-500 outline-none transition text-sm md:text-base ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

