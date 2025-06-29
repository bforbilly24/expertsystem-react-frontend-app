// answer-radio-group.tsx
import React from 'react'
import { Label } from '@/components/ui/shadcn/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/shadcn/radio-group'

interface AnswerRadioGroupProps {
  questionIndex: number
  value: number
  onChange: (questionIndex: number, value: string) => void
}

const AnswerRadioGroup = React.memo(
  ({ questionIndex, value, onChange }: AnswerRadioGroupProps) => {
    const optionLabels = [
      'Kurang sesuai',
      'Cukup sesuai',
      'Biasa',
      'Sesuai',
      'Sangat sesuai'
    ];
    return (
      <RadioGroup
        onValueChange={(val) => onChange(questionIndex, val)}
        value={value === -1 ? '' : value.toString()}
        className='mt-2 w-full'
        aria-label={`Answer options for question ${questionIndex + 1}`}
      >
        <div className='flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 w-full'>
          {[1, 2, 3, 4, 5].map((val) => (
            <div key={val} className='flex items-center space-x-2'>
              <RadioGroupItem
                value={val.toString()}
                id={`q${questionIndex}-${val}`}
                className='h-5 w-5 text-orange-500'
                aria-label={`Select ${val}`}
              />
              <Label htmlFor={`q${questionIndex}-${val}`} className='text-sm sm:text-base'>
                {optionLabels[val - 1]}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  }
);

export default AnswerRadioGroup
