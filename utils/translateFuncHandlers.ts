export const renameNation = (name: string) => {
  const nationName = new Map([
    ["japan", "Япония"],
    ["usa", "США"],
    ["germany", "Германия"],
    ["uk", "Англия"],
    ["pan_asia", "Пан-Азия"],
    ["italy", "Италия"],
    ["ussr", "Советский союз"],
    ["france", "Франция"],
    ["commonwealth", "Содружество наций"],
    ["pan_america", "Панамериканские"],
    ["europe", "Европа"],
    ["netherlands", "Голландия"],
    ["spain", "Испания"],
  ]);
  return nationName.get(name);
};

export const renameShipClass = (shipName: string) => {
  const shipClass = new Map([
    ["submarine", "Подводная лодка"],
    ["destroyer", "Эсминец"],
    ["cruiser", "Крейсер"],
    ["battleship", "Линкор"],
    ["aircarrier", "Авианосец"],
  ]);
  return shipClass.get(shipName);
};
