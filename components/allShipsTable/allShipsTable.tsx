"use client"
import { useEffect, useState } from "react"
import PropertyListBox from "../propertyListBox/propertyListBox"
import ShipCard from "../shipCard/shipCard"
import Link from "next/link"
interface shipDataProps {
  data: {
    data: {
      vehicles: Array<{
        id: string
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
interface shipProps {
  id: string
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
}
const AllShipsTable = ({ data }: shipDataProps) => {
  const shipLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const shipCountries = [
    "Japan",
    "США",
    "Германия",
    "Англия",
    "Пан-Азия",
    "Италия",
    "Советский союз",
    "France",
    "Содружество наций",
    "Панамериканские",
    "Европа",
    "Голландия",
    "Испания",
  ]
  const shipClasses = ["Destroyer", "Submarine", "Cruiser", "Battleship", "Aircraft Carrier"]
  const [filteredShips, setFilteredShips] = useState<any>(data.data.vehicles)
  const [shipLevel, setShipLevel] = useState<number>(0)
  const [shipCountry, setCountry] = useState<string>("")
  const [shipClass, setShipClass] = useState<string>("")

  const refilterShips = () => {
    setFilteredShips(
      data.data.vehicles.filter((item) => {
        item.level === shipLevel ||
          item.nation.title === shipCountry ||
          item.type.title === shipClass
      }),
    )
  }

  const handleChangeShipLevel = (value: number) => {
    setShipLevel(value)
    if (filteredShips.length === 0) {
      refilterShips()
    }
    setFilteredShips(filteredShips.filter((ship: any) => ship.level === value))
  }
  const handleChangeCountry = (value: string) => {
    setCountry(value)
    if (filteredShips.length === 0) {
      refilterShips()
    }
    setFilteredShips(filteredShips.filter((ship: any) => ship.nation.title === value))
  }
  const handleChangeShipClass = (value: string) => {
    setShipClass(value)
    if (filteredShips.length == 0) {
      refilterShips()
    }
    setFilteredShips(filteredShips.filter((ship: any) => ship.type.title === value))
  }
  return (
    <div className="grid grid-flow-row max-w-screen-md justify-center items-center py-4">
      <div className="flex gap-6 justify-between">
        <div className="flex gap-2 justify-center items-center">
          <p>Уровень корабля </p>
          <PropertyListBox onChange={handleChangeShipLevel} data={shipLevels} />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p>Нация </p>
          <PropertyListBox onChange={handleChangeCountry} data={shipCountries} />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p>Класс </p>
          <PropertyListBox onChange={handleChangeShipClass} data={shipClasses} />
        </div>
      </div>
      <div className="ship-list overflow-y-scroll mt-5 pr-2">
        {filteredShips.map((ship: shipProps) => (
          <div key={ship.title}>
            <Link href={`/ship/${ship.id}`}>
              <ShipCard ship={ship} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllShipsTable
