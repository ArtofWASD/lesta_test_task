"use client";
import React from "react";
import Image from "next/image";
import { renameNation, renameShipClass } from "@/utils/translateFuncHandlers";

const ShipCard = ({ ship }: any) => {
  return (
    <div>
      {ship && (
        <div className="flex gap-2 border-2 rounded-lg p-4 justify-center items-center my-2 max-w-auto">
          <p>Имя корабля: {ship.title.replace(/.\(.+\)/, "")}</p>
          <p className="flex items-center">
            Класс: {renameShipClass(ship.type?.name)}
            <Image
              src={`https:${ship.type?.icons.default}`}
              alt={ship?.title}
              height={40}
              width={30}
            />
          </p>
          <p>Нация: {renameNation(ship.nation?.name)}</p>
          <p>Уровень: {ship.level}</p>
          <Image
            src={`https:${ship.icons?.medium}`}
            alt={ship?.title}
            height={200}
            width={150}
          />
        </div>
      )}
    </div>
  );
};

export default ShipCard;
