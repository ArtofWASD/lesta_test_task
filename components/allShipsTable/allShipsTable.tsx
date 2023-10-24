const AllShipsTable = ({ data }: any) => {
  return (
    <div className="">
      <p>All ships table here</p>
      <>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Страна</th>
              <th>Уровень</th>
            </tr>
          </thead>
          {data?.data?.vehicles?.map((item: any) => (
            <tbody key={item.id}>
              <tr key={item.title}>
                <td>{item.title}</td>
              </tr>
              <tr>
                <td>{item.nation.name}</td>
              </tr>
              <tr>
                <td>{item.level}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </>
    </div>
  )
}

export default AllShipsTable
