const url = "https://vortex.korabli.su/api/graphql/glossary/"

export const shipsRequest = async (query: any) => {
  const data = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error.message))
  return data
}
