import { Row } from '@tanstack/react-table';
import AnswerRadioGroup from './answer-radio-group';
import React from 'react';

interface QuestionRowProps {
  row: Row<string>;
  answers: number[];
  onAnswerChange: (questionIndex: number, value: string) => void;
  currentPage: number;
  perPage: number;
}

const QuestionRow = React.memo(
  ({ row, answers, onAnswerChange, currentPage, perPage }: QuestionRowProps) => {
    const globalIndex = (currentPage - 1) * perPage + row.index;
    const question = row.original;

    return (
      <div className="w-full flex flex-col items-start">
        <p className="font-semibold text-lg mb-2">
          Test No. {globalIndex + 1}
        </p>
        <p className="text-base text-foreground mb-4">{question}</p>
        <AnswerRadioGroup
          questionIndex={globalIndex}
          value={answers[globalIndex]}
          onChange={onAnswerChange}
        />
      </div>
    );
  }
);

export default QuestionRow;