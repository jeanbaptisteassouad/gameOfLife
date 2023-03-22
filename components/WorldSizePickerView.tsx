
const WorldSizePickerView = ({
  rowCount,
  setRowCount,
  columnCount,
  setColumnCount,
}: {
  rowCount: number,
  setRowCount: (a: number) => void,
  columnCount: number,
  setColumnCount: (a: number) => void,
}) => {
  return (
    <div style={{display: 'flex', gap: 'var(--var-main-gap)', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
      <Button
        setRowCount={setRowCount}
        setColumnCount={setColumnCount}
        dim={30}
      />
      <Button
        setRowCount={setRowCount}
        setColumnCount={setColumnCount}
        dim={40}
      />
      <Button
        setRowCount={setRowCount}
        setColumnCount={setColumnCount}
        dim={50}
      />
      <Button
        setRowCount={setRowCount}
        setColumnCount={setColumnCount}
        dim={60}
      />
    </div>
  )
}

export default WorldSizePickerView

const Button = ({
  dim,
  setRowCount,
  setColumnCount,
}: {
  dim: number,
  setRowCount: (a: number) => void,
  setColumnCount: (a: number) => void,
}) => {
  return (
    <button onClick={() => {
      setRowCount(dim)
      setColumnCount(dim)
    }}>
      {`${dim} x ${dim}`}
    </button>
  )
}
