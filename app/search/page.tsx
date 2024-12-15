export default async function SearchResult ({searchParams}: {searchParams: Promise <{query: string}>}) {
    return(
        <div>{(await searchParams).query}</div>
    )
}