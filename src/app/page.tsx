export default function Home() {
   return (
      <main className="p-8 space-y-12">
         <section className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Font Samples</h2>

            <div className="font-forum text-2xl">Forum Font: The quick brown fox jumps over the lazy dog</div>
            <div className="font-gadugi text-2xl">Gadugi Font: The quick brown fox jumps over the lazy dog</div>
            <div className="font-noto-serif-oriya text-2xl">
               Noto Serif Oriya: The quick brown fox jumps over the lazy dog
            </div>
            <div className="font-retro-signature text-2xl">
               Retro Signature: The quick brown fox jumps over the lazy dog
            </div>
         </section>
         <section className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Color Samples</h2>
            <div className="grid grid-cols-3 gap-4">
               <div className="p-6 bg-primary text-white">Primary</div>
               <div className="p-6 bg-secondary text-white">Secondary</div>
               <div className="p-6 bg-support01">Support 01</div>
               <div className="p-6 bg-support02">Support 02</div>
               <div className="p-6 bg-support03 text-white">Support 03</div>
               <div className="p-6 bg-support04 text-white">Support 04</div>
               <div className="p-6 bg-support05">Support 05</div>
               <div className="p-6 bg-support06 text-white">Support 06</div>
               <div className="p-6 bg-support07">Support 07</div>
            </div>
         </section>
      </main>
   )
}
