import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  type ColumnDef,
  flexRender,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/shadcn/table'
import QuestionRow from './question-row'

interface QuestionTableProps {
  data: string[]
  answers: number[]
  onAnswerChange: (questionIndex: number, value: string) => void
  currentPage: number
  perPage: number
  totalQuestions: number
}

const QuestionTable = React.memo(
  ({
    data,
    answers,
    onAnswerChange,
    currentPage,
    perPage,
    totalQuestions,
  }: QuestionTableProps) => {
    const columns = React.useMemo<ColumnDef<string>[]>(
      () => [
        {
          id: 'question',
          header: 'Question',
          cell: ({ row }) => (
            <QuestionRow
              row={row}
              answers={answers}
              onAnswerChange={onAnswerChange}
              currentPage={currentPage}
              perPage={perPage}
            />
          ),
        },
      ],
      [answers, onAnswerChange, currentPage, perPage]
    )

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: {
          pageIndex: currentPage - 1,
          pageSize: perPage,
        },
      },
      manualPagination: true,
      pageCount: Math.ceil(totalQuestions / perPage),
    })

    return (
      <div>
        <Table>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
)

export default QuestionTable
