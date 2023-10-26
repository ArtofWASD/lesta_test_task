"use client"
import { useEffect, useState } from "react"
import PropertyListBox from "../propertyListBox/propertyListBox"
import ShipCard from "../shipCard/shipCard"
interface shipDataProps {
  data: {
    data: {
      vehicles: Array<{
        title: string
        description: string
        icons: {
          large: string
          medium: string
        }
        level: number
        type: {
          name: string
          title: string
          icons: {
            default: string
          }
        }
        nation: {
          name: string
          title: string
          color: string
          icons: {
            small: string
            medium: string
            large: string
          }
        }
      }>
    }
  }
}

const AllShipsTable = ({ data }: shipDataProps) => {
  const [filteredShips, setFilteredShips] = useState<any>([])
  const [shipLevel, setShipLevel] = useState(0)
  const handelchangeShipLevel = (value: number) => {
    setShipLevel(value)
  }

  useEffect(() => {
    const filteredShips = data.data.vehicles.filter((ship) => ship.level === shipLevel)
    setFilteredShips(filteredShips)
  }, [data.data.vehicles, shipLevel])

  return (
    <div className="grid grid-flow-row max-w-screen-md justify-center items-center py-4">
      <div className="flex gap-6 justify-between">
        <div className="flex gap-2 justify-center items-center">
          <p>Уровень корабля </p>
          <PropertyListBox onChange={handelchangeShipLevel} />
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
        {filteredShips.map((ship:any) => (
          <div key={ship.title}>
            <ShipCard ship={ship} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllShipsTable
