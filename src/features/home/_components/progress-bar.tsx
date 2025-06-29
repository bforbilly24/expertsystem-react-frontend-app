import React from 'react';
import { Progress } from '@/components/ui/shadcn/progress';

interface ProgressBarProps {
  answered: number;
  total: number;
}

const ProgressBar = React.memo(({ answered, total }: ProgressBarProps) => {
  const percentage = total > 0 ? (answered / total) * 100 : 0;

  return (
    <div
      className="mt-4"
      aria-label={`Progress: ${answered} dari ${total} test terjawab`}
    >
      <Progress value={percentage} className="w-full bg-green-500/20" />
    </div>
  );
});

export default ProgressBar;