
const WorldSizePickerView = ({
  rowCount,
  setRowCount,
  columnCount,
  setColumnCount,
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
