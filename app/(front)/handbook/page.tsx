export default function Page() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-center my-5 text-xl md:text-3xl font-bold">Saytdan foydalanish uchun yo'riqnoma</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Video va kontent qismi */}
        <div className="w-full md:w-3/4">
          <div className="relative w-full overflow-hidden pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
              src="https://www.youtube.com/embed/_J0_Wfffjh4?si=kKo1lW1R51pqnn9L" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
          </div>
          <h3 className="mt-4 text-lg font-semibold">#00. Yo'riqnoma videosi</h3>
          <hr className="my-4 border-primary" />

          <div className="prose max-w-full">
            <h2 id="asosiy" className="text-2xl font-bold text-primary">Asosiy bo'limlar</h2>
            <p className="text-gray-700">Saytdan qanday foydalanish bo‘yicha batafsil yo‘riqnoma videosini tomosha qiling...</p>

            <h2 id="mahsulotlar" className="text-2xl font-bold text-primary">Mahsulotlar katalogi</h2>
            <p className="text-gray-700">Bu bo‘limda siz turli toifadagi mahsulotlarni ko‘rishingiz...</p>

            <div className="card bg-base-100 shadow-lg p-4 my-4">
              <h3 id="buyurtma" className="text-xl font-semibold text-secondary">Buyurtma berish</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Tanlangan mahsulotni "Savat" ga qo‘shing.</li>
                <li>"Savat" bo‘limiga o‘tib, buyurtmangizni ko‘rib chiqing.</li>
                <li>Yetkazib berish ma’lumotlarini to‘ldiring.</li>
                <li>To‘lov usulini tanlang va buyurtmani tasdiqlang.</li>
              </ul>
            </div>

            <div className="card bg-base-100 shadow-lg p-4 my-4">
              <h3 id="kabinet" className="text-xl font-semibold text-secondary">Shaxsiy kabinet</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Buyurtmalaringiz tarixini ko‘rish.</li>
                <li>Yetkazib berish manzilini yangilash.</li>
                <li>Parol va shaxsiy ma’lumotlarni o‘zgartirish.</li>
              </ul>
            </div>

            <h2 id="qoshimcha" className="text-2xl font-bold text-primary">Qo‘shimcha bo‘limlar</h2>
            <div className="card bg-base-100 shadow-lg p-4 my-4">
              <h3 id="yangiliklar" className="text-xl font-semibold text-secondary">Yangiliklar</h3>
              <p className="text-gray-600">Saytdagi eng so‘nggi yangiliklar va aksiyalar bilan tanishing...</p>
            </div>

            <div className="card bg-base-100 shadow-lg p-4 my-4">
              <h3 id="maslahatlar" className="text-xl font-semibold text-secondary">Foydali maslahatlar</h3>
              <p className="text-gray-600">Bu bo‘limda mahsulotlardan qanday foydalanish...</p>
            </div>

            <h2 id="foydalanish" className="text-2xl font-bold text-primary">Foydalanish bo‘yicha qo‘shimcha ma’lumotlar</h2>

            <div className="card bg-base-100 shadow-lg p-4 my-4">
              <h3 id="xavfsizlik" className="text-xl font-semibold text-secondary">Xavfsizlik</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Saytda ro‘yxatdan o‘tishda kuchli parol tanlang.</li>
                <li>Shaxsiy ma’lumotlaringizni hech kim bilan baham ko‘rmang.</li>
              </ul>
            </div>

            <div className="card bg-base-100 shadow-lg p-4 my-4">
              <h3 id="tolov" className="text-xl font-semibold text-secondary">To‘lov usullari</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Saytda turli to‘lov usullari mavjud: bank kartalari...</li>
                <li>To‘lov amalga oshirilgandan so‘ng, tasdiqlash xati keladi.</li>
              </ul>
            </div>

            <div className="card bg-base-100 shadow-lg p-4 my-4">
              <h3 id="yetkazib" className="text-xl font-semibold text-secondary">Yetkazib berish</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Buyurtmalar 1-3 ish kuni ichida yetkazib beriladi.</li>
                <li>Yetkazib berish holatini shaxsiy kabinet orqali kuzatib borishingiz mumkin.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky menyu */}
        <div className="w-full md:w-1/4">
          <div className="sticky top-6 bg-base-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Ma'lumotlarni o'qing</h2>
            <ul className="menu bg-base-200 rounded-box">
              <li><a href="#asosiy">Asosiy bo‘limlar</a></li>
              <li>
                <a href="#mahsulotlar">Mahsulotlar katalogi</a>
                <ul>
                  <li><a href="#buyurtma">Buyurtma berish</a></li>
                  <li><a href="#kabinet">Shaxsiy kabinet</a></li>
                </ul>
              </li>
              <li>
                <a href="#foydalanish">Qo‘shimcha ma’lumotlar</a>
                <ul>
                  <li><a href="#xavfsizlik">Xavfsizlik</a></li>
                  <li><a href="#tolov">To‘lov usullari</a></li>
                  <li><a href="#yetkazib">Yetkazib berish</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
