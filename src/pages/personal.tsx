export function Personal() {
  return (
    <div className="h-screen overflow-y-auto rounded bg-[rgba(0,0,5,0.5)] text-2xl text-neutral-100">
      <br />
      <div className="mb-6 flex justify-center">Personal</div>
      <div className="grid grid-cols-4 items-center border-b border-neutral-300 text-center">
        <div>Tierpfleger</div>
        <div className="border-neutral-3x00 border-l">Tierärzte</div>
        <div className="border-l border-neutral-300">Verkäufer</div>
        <div className="border-l border-neutral-300">Normalo</div>
      </div>
      <div className="grid grid-cols-4 text-left">
        <div>
          <div>Name: Max</div>
          <div>Alter: 30</div>
          <div>Erfahrung: 5 Jahre</div>
        </div>

        <div className="border-l border-neutral-300">
          <div>Name: Dr. Sarah</div>
          <div>Alter: 45</div>
          <div>Erfahrung: 15 Jahre</div>
        </div>

        <div className="border-l border-neutral-300">
          <div>Name: Lisa</div>
          <div>Alter: 25</div>
          <div>Erfahrung: 2 Jahre</div>
        </div>

        <div className="border-l border-neutral-300">
          <div>Name: Paul</div>
          <div>Alter: 35</div>
          <div>Erfahrung: 8 Jahre</div>
        </div>
      </div>
    </div>
  );
}
