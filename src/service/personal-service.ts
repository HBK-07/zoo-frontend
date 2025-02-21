export type personalType = {
  id: number;
  name: string;
  rolle: string;
  gehalt: number;
}[];

export async function fetchData(): Promise<personalType> {
  try {
    const response = await fetch(
      "https://backend-dev-zoo-gwc-hbk.azurewebsites.net/personal",
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    return [];
  }
}
