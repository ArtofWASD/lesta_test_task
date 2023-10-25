"use client"
import React from "react"
import Image from "next/image"
import { renameNation, renameShipClass } from "@/utils/translateFuncHandlers"

const ShipCard = ({ ship }: any) => {
  return (
    <>
      {ship && (
        <div className="flex gap-3 border-2 rounded-lg p-2 justify-around items-end my-2 max-w-auto">
          <p>Имя корабля: {ship.title.replace(/.\(.+\)/, "")}</p>
          <div className="flex items-center gap-1 justify-self-start">
            <Image
              src={`https:${ship.type?.icons.default}`}
              alt={ship?.title}
              height={25}
              width={25}
            />
            {renameShipClass(ship.type?.name)}
          </div>
          <div className="flex items-center">
            <Image
              src={`https:${ship.nation?.icons.small}`}
              alt={ship?.title}
              height={40}
              width={30}
            />
            {renameNation(ship.nation?.name)}
          </div>
          <p>Уровень: {ship.level}</p>
          <Image
            src={`https:${ship.icons?.medium}`}
            alt={ship?.title}
            height={200}
            width={150}
          />
        </div>
      )}
    </>
  )
}

export default ShipCard
