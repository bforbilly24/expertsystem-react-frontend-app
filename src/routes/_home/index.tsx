import { createFileRoute } from '@tanstack/react-router'
import Home from '@/features/home'

export const Route = createFileRoute('/_home/')({
  component: Home,
})