import { useState, useEffect, useMemo } from 'react';
import { useQuestions } from '@/actions/get-questions';
import { useSubmitAnalysis } from '@/actions/post-analysis';
import { AlertCircle } from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/shadcn/alert';
import { Card, CardContent } from '@/components/ui/shadcn/card';
import ErrorAlert from './error-alert';
import LoadingCard from './loading-card';
import PaginationControls from './pagination-controls';
import ProgressBar from './progress-bar';
import QuestionGrid from './question-grid';
import QuestionTable from './question-table';
import SubmitButton from './submit-button';

function Questions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const perPage = 10;
  const { data, isLoading, error, refetch } = useQuestions(currentPage, perPage);
  const { mutate: submitAnalysis, isPending: isSubmitting } = useSubmitAnalysis();
  const totalQuestions =
    data?.total_questions && data.total_questions > 0 ? data.total_questions : 50;
  const totalPages = Math.ceil(totalQuestions / perPage);

  const initialAnswers = useMemo(() => Array(totalQuestions).fill(-1), [totalQuestions]);
  const [answers, setAnswers] = useState<number[]>(initialAnswers);

  useEffect(() => {
    if (data?.total_questions && answers.length !== data.total_questions) {
      setAnswers(Array(data.total_questions).fill(-1));
    }
  }, [data?.total_questions, answers.length]);

  const handleAnswerChange = useMemo(
    () => (questionIndex: number, value: string) => {
      const newAnswers = [...answers];
      const answerValue = parseInt(value);
      if (answerValue >= 1 && answerValue <= 5) {
        newAnswers[questionIndex] = answerValue;
        setAnswers(newAnswers);
      }
    },
    [answers]
  );

  const handlePrevious = () => {
    if (isNavigating || currentPage <= 1) return;
    setIsNavigating(true);
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    setActiveQuestionIndex((newPage - 1) * perPage);
    setTimeout(() => setIsNavigating(false), 600);
  };

  const handleNext = () => {
    if (isNavigating || currentPage >= totalPages) return;
    setIsNavigating(true);
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    setActiveQuestionIndex((newPage - 1) * perPage);
    setTimeout(() => setIsNavigating(false), 600);
  };

  const handleQuestionClick = (questionIndex: number) => {
    if (isNavigating) return;
    const targetPage = Math.floor(questionIndex / perPage) + 1;
    setIsNavigating(true);
    setCurrentPage(targetPage);
    setActiveQuestionIndex(questionIndex);
    setTimeout(() => setIsNavigating(false), 600);
  };

  if (isLoading) {
    return <LoadingCard />;
  }

  if (error || !data) {
    return <ErrorAlert error={error} onRetry={refetch} />;
  }

  return (
    <div className="flex flex-col gap-y-4 overflow-y-auto">
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <h1 className="text-3xl capitalize font-semibold text-orange-500">
          Test Minat Bakat
        </h1>
        <h6 className="text-base text-muted-foreground">
          Dapatkan rekomendasi apa yang harus dipelajari yang sesuai kamu setelah
          mengikuti test minat & bakat ini!
        </h6>
      </div>

      <ProgressBar
        answered={answers.filter((a) => a !== -1).length}
        total={totalQuestions}
      />

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Side: Questions */}
        <div className="flex flex-col gap-y-4 w-full">
          <Card>
            <CardContent className="p-6">
              {data.soal.length === 0 ? (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>No Questions Found</AlertTitle>
                  <AlertDescription>
                    No questions are available for this page. Please try another
                    page or contact support.
                  </AlertDescription>
                </Alert>
              ) : (
                <QuestionTable
                  data={data.soal}
                  answers={answers}
                  onAnswerChange={handleAnswerChange}
                  currentPage={currentPage}
                  perPage={perPage}
                  totalQuestions={totalQuestions}
                />
              )}
            </CardContent>
          </Card>

          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            totalQuestions={totalQuestions}
            answers={answers}
            onPrevious={handlePrevious}
            onNext={handleNext}
            isNavigating={isNavigating}
          />

          <div className="flex items-center justify-end mt-6">
            {currentPage === totalPages && (
              <SubmitButton
                answers={answers}
                isSubmitting={isSubmitting}
                submitAnalysis={submitAnalysis}
                totalQuestions={totalQuestions}
              />
            )}
          </div>
        </div>

        {/* Right Side: Question Grid */}
          <QuestionGrid
            totalQuestions={totalQuestions}
            answers={answers}
            currentPage={currentPage}
            perPage={perPage}
            activeQuestionIndex={activeQuestionIndex}
            onQuestionClick={handleQuestionClick}
          />
      </div>
    </div>
  );
}

export default Questions;