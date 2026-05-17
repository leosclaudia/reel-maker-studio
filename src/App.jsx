export default function ReelMakerStudio() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,#ffd6c8_0,#fff5ef_30%,#f8efe9_65%,#f7e2e9_100%)] p-4 text-[#111827]">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[34px] bg-white/90 p-10 shadow-[0_30px_90px_rgba(45,35,30,0.18)]">
          <h1 className="text-5xl font-black">
            Reel Maker <span className="bg-gradient-to-r from-[#8b5cf6] to-[#fb7185] bg-clip-text text-transparent">Studio</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Crea reels increíbles en minutos para Instagram, TikTok y redes sociales.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[28px] border-2 border-dashed border-slate-200 bg-white p-10 text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-[#f3e8ff] text-3xl">
                ☁️
              </div>

              <h2 className="text-2xl font-bold">
                Subí tus fotos y videos
              </h2>

              <p className="mt-2 text-slate-500">
                Arrastrá archivos o hacé clic para seleccionar
              </p>

              <label className="mt-8 inline-block cursor-pointer rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#fb7185] px-7 py-4 font-bold text-white shadow-xl">
                📤 Seleccionar archivos
                <input type="file" multiple className="hidden" />
              </label>
            </div>

            <div className="rounded-[30px] bg-white p-8 shadow-[0_18px_55px_rgba(30,41,59,0.09)]">
              <h2 className="mb-6 text-xl font-black">
                Vista previa
              </h2>

              <div className="mx-auto flex aspect-[9/16] max-w-[280px] flex-col justify-end overflow-hidden rounded-[26px] bg-gradient-to-br from-[#60a5fa] via-[#818cf8] to-[#111827] p-5 text-white shadow-2xl">
                <div className="mb-auto text-right text-xs opacity-80">
                  ✨ ✨ ✨
                </div>

                <h3 className="text-4xl font-black uppercase">
                  REEL
                </h3>

                <p className="text-2xl italic opacity-90">
                  Preview
                </p>

                <div className="mt-6 h-1 rounded-full bg-white/30">
                  <div className="h-1 w-2/3 rounded-full bg-white"></div>
                </div>
              </div>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#fb7185] py-4 text-lg font-black text-white shadow-[0_14px_35px_rgba(139,92,246,0.32)]">
                ✨ Generar Reel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
