import './Pagination.css'

type PaginationProps = {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  onPrevious: () => void
  onNext: () => void
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPrevious,
  onNext,
  onPageChange,
}: PaginationProps) {
  const firstItem = (currentPage - 1) * itemsPerPage + 1
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems)
  const pageItems: (number | 'ellipsis-start' | 'ellipsis-end')[] = []

  if (totalPages <= 5) {
    pageItems.push(...Array.from({ length: totalPages }, (_, index) => index + 1))
  } else {
    const firstMiddlePage = currentPage <= 3
      ? 2
      : currentPage >= totalPages - 2
        ? totalPages - 3
        : currentPage - 1
    const lastMiddlePage = currentPage <= 3
      ? 4
      : currentPage >= totalPages - 2
        ? totalPages - 1
        : currentPage + 1

    pageItems.push(1)
    if (firstMiddlePage > 2) {
      pageItems.push('ellipsis-start')
    }
    for (let page = firstMiddlePage; page <= lastMiddlePage; page += 1) {
      pageItems.push(page)
    }
    if (lastMiddlePage < totalPages - 1) {
      pageItems.push('ellipsis-end')
    }
    pageItems.push(totalPages)
  }

  return (
    <nav className="pagination" aria-label="Paginación del catálogo">
      <p
        className="pagination__summary"
        aria-live="polite"
        aria-atomic="true"
      >
        Mostrando <strong>{firstItem}-{lastItem}</strong> de {totalItems} autos
      </p>

      <div className="pagination__controls">
        <button
          className="pagination__button pagination__button--direction"
          type="button"
          onClick={onPrevious}
          disabled={currentPage <= 1}
          aria-label="Ir a la página anterior"
        >
          <span aria-hidden="true">←</span>
          Anterior
        </button>

        <div
          className="pagination__pages"
          role="group"
          aria-label="Seleccionar página"
        >
          {pageItems.map((item) =>
            typeof item === 'number' ? (
              <button
                key={item}
                className="pagination__page"
                type="button"
                onClick={() => onPageChange(item)}
                aria-label={`Ir a la página ${item}`}
                aria-current={currentPage === item ? 'page' : undefined}
              >
                {item}
              </button>
            ) : (
              <span
                key={item}
                className="pagination__ellipsis"
                aria-hidden="true"
              >
                ...
              </span>
            ),
          )}
        </div>

        <button
          className="pagination__button pagination__button--direction"
          type="button"
          onClick={onNext}
          disabled={currentPage >= totalPages}
          aria-label="Ir a la página siguiente"
        >
          Siguiente
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </nav>
  )
}
