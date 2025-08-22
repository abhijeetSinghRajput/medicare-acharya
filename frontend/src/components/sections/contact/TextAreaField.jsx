import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'

const TextAreaField = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 4,
}) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-muted-foreground">
      {label}
    </Label>
    <Textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-white/5 backdrop-blur-sm border-white/10 rounded-lg focus-visible:ring-1 focus-visible:ring-[#a365ff] focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
    />
  </div>
);

export default TextAreaField
