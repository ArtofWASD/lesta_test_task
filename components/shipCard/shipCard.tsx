"use client"
import React from "react"
import Image from "next/image"
import { renameNation, renameShipClass } from "@/utils/translateFuncHandlers"
interface shipProps {
  ship: {
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
}

const ShipCard = ({ ship }: shipProps) => {
  return (
    <>
      {ship && (
        <div className="grid grid-cols-[25%,15%,15%,10%,15%,] gap-3 border-2 rounded-lg p-2 justify-around items-end my-2 max-w-auto">
          <p>Название: {ship.title?.replace(/.\(.+\)/, "")}</p>
          <div className="flex items-center gap-1 justify-self-start">
            <p className="pr-1">Класс:</p>
            <Image
              src={`https:${ship.type?.icons.default}`}
              alt={ship?.title}
              height={25}
              width={25}
            />
            {renameShipClass(ship.type?.name)}
          </div>
          <div className="flex items-center">
            <p className="pr-1">Страна:</p>
            <Image
              src={`https:${ship.nation?.icons.small}`}
              alt={ship?.title}
              height={40}
              width={30}
            />
            {renameNation(ship.nation?.name)}
          </div>
          <p className="pr-1">Уровень: {ship.level}</p>
          <Image
            src={`https:${ship.icons?.large}`}
            alt={ship?.title}
            height={80}
            width={100}
          />
        </div>
      )}
    </>
  )
}

export default ShipCard
