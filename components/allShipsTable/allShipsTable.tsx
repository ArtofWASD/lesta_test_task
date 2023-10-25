"use client"
import PropertyListBox from "../propertyListBox/propertyListBox"
import ShipCard from "../shipCard/shipCard"

const AllShipsTable = ({ data }: any) => {
  return (
    <div className="grid grid-flow-row max-w-screen-md justify-center items-center py-4">
      <div className="flex gap-6 justify-between">
        <div className="flex gap-2 justify-center items-center">
          <p>Уровень корабля </p>
          <PropertyListBox />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p>Нация </p>
          <PropertyListBox />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p>Класс </p>
          <PropertyListBox />
        </div>
      </div>
      <div className="ship-list overflow-y-scroll mt-5 pr-2">
        {data.data.vehicles.map((ship: any) => (
          <div key={ship.title}>
            <ShipCard ship={ship} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllShipsTable
