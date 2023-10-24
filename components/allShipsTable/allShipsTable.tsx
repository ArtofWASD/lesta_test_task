import ShipCard from "../shipCard/shipCard";

const AllShipsTable = ({ data }: any) => {
  return (
    <div className="">
      <p>All ships table here</p>
      {data.data.vehicles.map((ship: any) => (
        <div key={ship.title}>
          <ShipCard ship={ship} />
        </div>
      ))}
    </div>
  );
};

export default AllShipsTable;
