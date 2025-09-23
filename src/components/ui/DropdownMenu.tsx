
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
  contentClassName?: string;
}

export const CustomDropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
  className,
  contentClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      <div
        className="cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDown
          className={cn('ml-1 h-4 w-4 transition-transform duration-200', {
            'transform rotate-180': isOpen,
          })}
        />
      </div>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 w-56 origin-top-right rounded-lg bg-popover p-2 shadow-dropdown animate-scale-in',
            {
              'left-0': align === 'left',
              'right-0': align === 'right',
            },
            contentClassName
          )}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick, className }) => {
  return (
    <div
      className={cn('dropdown-link', className)}
      onClick={onClick}
      role="menuitem"
    >
      {children}
    </div>
  );
};
