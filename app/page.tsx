import AllShipsTable from "@/components/allShipsTable/allShipsTable"
import { shipsRequest } from "@/utils/qraphQl"

export default async function Home() {
  const data = await shipsRequest(`query {
    vehicles {
      id
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }`)

  return (
    <main className="grid justify-center items-center">
      <AllShipsTable data={data} />
    </main>
  )
}
