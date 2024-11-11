import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
  minDate?: Date;
}

export default function DatePicker({
  selected,
  onChange,
  placeholder = 'Select date',
  minDate,
}: DatePickerProps) {
  return (
    <div className="relative">
      <div className="flex items-center border rounded-lg p-2 hover:border-gray-400 transition">
        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="date"
          className="w-full outline-none"
          value={selected ? format(selected, 'yyyy-MM-dd') : ''}
          min={minDate ? format(minDate, 'yyyy-MM-dd') : undefined}
          onChange={(e) => onChange(new Date(e.target.value))}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}