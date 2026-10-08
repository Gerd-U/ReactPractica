export default function SearchBar() {
  return (
    <form>
      <label htmlFor="search">Buscar</label>
      <input id="search" type="search" placeholder="Busca tu coche" />
      <button type="submit">Buscar</button>
    </form>
  )
}
