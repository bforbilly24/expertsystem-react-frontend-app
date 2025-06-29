import { Button } from '@/components/ui/shadcn/button';
import { toast } from '@/hooks/use-toast';
import { UseMutateFunction } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

interface AnalysisResponse {
  hasil: string;
}

interface SubmitButtonProps {
  answers: number[];
  isSubmitting: boolean;
  submitAnalysis: UseMutateFunction<
    AnalysisResponse,
    unknown,
    number[],
    unknown
  >;
  totalQuestions: number;
}

function SubmitButton({
  answers,
  isSubmitting,
  submitAnalysis,
  totalQuestions,
}: SubmitButtonProps) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (answers.length !== totalQuestions || answers.includes(-1)) {
      toast({
        title: 'Belum Terselesaikan Semua Test',
        description: `Anda harus menjawab semua ${totalQuestions} test.`,
        variant: 'destructive',
      });
      return;
    }
    if (answers.some((answer) => answer < 1 || answer > 5)) {
      toast({
        title: 'Jawaban Tidak Valid',
        description: 'Semua jawaban harus berisi angka antara 1 dan 5.',
        variant: 'destructive',
      });
      return;
    }

    submitAnalysis(answers, {
      onSuccess: (data) => {
        navigate({
          to: '/result',
          state: { answers, result: data.hasil },
        });
      },
      onError: () => {
        toast({
          title: 'Pengiriman Gagal',
          description: 'Gagal mengirimkan jawaban. Silakan coba lagi.',
          variant: 'destructive',
        });
      },
    });
  };

  return (
    <Button
      onClick={handleSubmit}
      className="lg:w-fit w-full bg-orange-500 hover:bg-orange-400"
      variant="default"
      size={'lg'}
      disabled={isSubmitting}
      aria-label="Submit answers"
    >
      {isSubmitting ? 'Submitting...' : 'Submit Jawaban'}
    </Button>
  );
}

export default SubmitButton;