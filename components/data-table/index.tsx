import { Song, columns } from "./columns";
import { DataTable } from "./data-table";
import { data } from "./data";

async function getData(): Promise<Song[]> {
  // Fetch data from your API here.
  return data;
}

export default async function RecentStreams() {
  const data = await getData();

  return (
    <div className="space-y-4">
      <p className="text-4xl font-bold">Data Table</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
