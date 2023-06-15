interface Props {
  states: string[]
  sectorType: string[]
  setState: (state: string) => void
  setSector: (sector: string) => void
}

const FilterOptions = ({ states, sectorType, setState, setSector }: Props) => {
  return (
    <>
      <div className='flex space-x-6 items-center'>
        <p className='font-semibold text-lg'>State</p>
        <select
          onChange={(e) => setState(e.target.value)}
          className='p-1 focus:outline-none rounded-lg' name='state' id='state'>
          {states.map((state, index) => (
            <option className='rounded-xl' key={index} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className='flex space-x-6 items-center'>
        <p className='font-semibold text-lg'>Sector</p>
        <select
          onChange={(e) => setSector(e.target.value)}
          className='p-1 focus:outline-none rounded-lg' name='sector' id='sector'>
          {sectorType.map((sector, index) => (
            <option key={index} value={sector}>{sector}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default FilterOptions
