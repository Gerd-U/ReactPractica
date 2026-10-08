import { useEffect, useState } from 'react'
import CardCarList from '../components/CardCarList'
import SearchBar from '../../shared/components/SearchBar'
import Pagination from '../../shared/components/Pagination'
import type { Car } from '../types/Car'
import './Cars.css'

export default function Cars() {
  const [cars, setCars] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const carsPerPage = 6

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setCurrentPage(1)
  }

  useEffect(() => {
    fetch('/data/cars.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudieron cargar los vehículos')
        }

        return response.json() as Promise<Car[]>
      })
      .then(setCars)
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false))
  }, [])

  const filteredCars = cars.filter((car) =>
    car.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()),
  )
  const totalPages = Math.ceil(filteredCars.length / carsPerPage)
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar)

  return (
    <main className="cars-page">
      <h1>Catálogo de coches</h1>
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      {isLoading && <p>Cargando vehículos...</p>}
      {hasError && <p>No se pudieron cargar los vehículos.</p>}
      {!isLoading && !hasError && currentCars.length > 0 && (
        <>
          <CardCarList cars={currentCars} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredCars.length}
            itemsPerPage={carsPerPage}
            onPrevious={() => setCurrentPage((page) => Math.max(1, page - 1))}
            onNext={() =>
              setCurrentPage((page) =>
                Math.max(1, Math.min(totalPages, page + 1)),
              )
            }
            onPageChange={(page) =>
              setCurrentPage(() => Math.max(1, Math.min(totalPages, page)))
            }
          />
        </>
      )}
      {!isLoading && !hasError && filteredCars.length === 0 && (
        <p role="status">
          No se encontraron autos con ese nombre. Intenta con otra búsqueda.
        </p>
      )}
    </main>
  )
}
