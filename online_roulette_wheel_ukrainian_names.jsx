export default function RouletteWheel() {
  const names = ["Константин", "Михайло", "Роман", "Сергій", "Олексій"];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">🎯 Онлайн рулетка</h1>
        <p className="text-slate-300 text-lg">
          Натисни кнопку «Крутити», щоб випадково вибрати ім’я.
        </p>

        <div className="relative mx-auto w-[420px] h-[420px] rounded-full border-8 border-white overflow-hidden shadow-2xl">
          <div className="absolute inset-0 rounded-full" style={{
            background: `conic-gradient(
              #7c3aed 0deg 72deg,
              #2563eb 72deg 144deg,
              #16a34a 144deg 216deg,
              #eab308 216deg 288deg,
              #ea580c 288deg 360deg
            )`
          }} />

          {names.map((name, index) => {
            const angle = index * 72 + 36;
            return (
              <div
                key={name}
                className="absolute left-1/2 top-1/2 origin-center text-white font-bold text-2xl"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-150px)`
                }}
              >
                <div style={{ transform: `rotate(-${angle}deg)` }}>
                  {name}
                </div>
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black border-4 border-white" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => {
              const winner = names[Math.floor(Math.random() * names.length)];
              alert(`🎉 Переможець: ${winner}`);
            }}
            className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl text-xl font-semibold shadow-lg"
          >
            Крутити
          </button>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 text-left text-slate-300 max-w-xl">
            <p className="font-semibold text-white mb-2">Як зробити онлайн-доступ:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Скопіюй цей код у GitHub або Vercel.</li>
              <li>Опублікуй як безкоштовний сайт.</li>
              <li>Поділись посиланням з учасниками.</li>
              <li>Усі зможуть бачити результат онлайн у реальному часі через демонстрацію екрана або стрім.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
