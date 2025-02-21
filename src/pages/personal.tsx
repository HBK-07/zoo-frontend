import { useState, useEffect } from "react";
import { fetchData, personalType } from "../service/personal-service";

export function Personal() {
  const [data, setData] = useState<personalType>([]);

  const tierpfleger = data.filter((item) => item.rolle === "Tierpfleger");
  const tieraerzte = data.filter((item) => item.rolle === "Tierarzt");
  const verkaeufer = data.filter((item) => item.rolle === "Verkaeufer");
  const normalo = data.filter((item) => item.rolle === "Normal");

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="h-screen overflow-y-auto rounded bg-[rgba(0,0,5,0.5)] text-2xl text-neutral-100">
      <h1 className="mb-6 flex justify-center text-4xl">Personal</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b border-neutral-300 text-center text-3xl">
            <th>Tierpfleger</th>
            <th className="border-l border-neutral-300">Tierärzte</th>
            <th className="border-l border-neutral-300">Verkäufer</th>
            <th className="border-l border-neutral-300">Normalo</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-neutral-300 text-3xl">
            {tierpfleger.map((item) => (
              <td key={item.id}>
                id: {item.id}
                <br />
                Name: {item.name}
                <br />
                Rolle: {item.rolle}
                <br />
                Gehalt: {item.gehalt}
              </td>
            ))}
            {tieraerzte.map((item) => (
              <td key={item.id} className="border-l border-neutral-300">
                id: {item.id}
                <br />
                Name: {item.name}
                <br />
                Rolle: {item.rolle}
                <br />
                Gehalt: {item.gehalt}
              </td>
            ))}
            {verkaeufer.map((item) => (
              <td key={item.id} className="border-l border-neutral-300">
                id: {item.id}
                <br />
                Name: {item.name}
                <br />
                Rolle: {item.rolle}
                <br />
                Gehalt: {item.gehalt}
              </td>
            ))}
            {normalo.map((item) => (
              <td key={item.id} className="border-l border-neutral-300">
                id: {item.id}
                <br />
                Name: {item.name}
                <br />
                Rolle: {item.rolle}
                <br />
                Gehalt: {item.gehalt}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
