import { AlertCircle } from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/shadcn/alert';
import { Button } from '@/components/ui/shadcn/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card';
import { Main } from '@/components/layout/main';

interface ErrorAlertProps {
  error: unknown;
  onRetry: () => void;
}

function ErrorAlert({ error, onRetry }: ErrorAlertProps) {
  const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      if (error.message.includes('Failed to fetch')) {
        return 'Unable to connect to the server. This may be due to a network issue or server configuration (CORS). Please try again later.';
      }
      return error.message;
    }
    return 'An unexpected error occurred. Please try again.';
  };

  return (
    <Main className="pt-20">
      <Card className="w-full flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle className="text-red-500 text-xl">Error</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col items-center justify-center">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Failed to Load Questions</AlertTitle>
            <AlertDescription>
              {error
                ? getErrorMessage(error)
                : 'No questions available. Please try again later.'}
            </AlertDescription>
          </Alert>
          <Button
            onClick={onRetry}
            size="lg"
            className="mt-4"
            variant="default"
          >
            Retry
          </Button>
        </CardContent>
      </Card>
    </Main>
  );
}

export default ErrorAlert;