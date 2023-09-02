import Image from 'next/image';

const About = () => {
  return (
    <div className='flex flex-col items-center my-20 mr-10'>
      <section className="container mx-auto px-4 py-8 bg-slate-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Kimiz?</h2>
          <p className="text-gray-100">
            MKSigorta, 2007 yılında Mustafa Kurtulmuş tarafından kurulan bir sigorta şirketidir.
            <br />
            <span className="font-semibold">birikim ve deneyimle</span> yola çıktık ve başlangıçta
            küçük bir ofiste hizmet vermeye başladık. Ancak bugün, Türkiye'nin dört bir yanındaki müşterilere
            hizmet veren saygın bir sigorta kuruluşu haline geldik.
          </p>
        </div>
      </section>
      <section className="bg-slate-500 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-gray-200 text-right">Misyonumuz</h2>
          <p className="text-gray-200 text-right">
            Misyonumuz, müşterilerimize finansal güvence sağlamaktır. Hayatın her döneminde, her türlü
            riski öngörmek ve bu risklere karşı en iyi korumayı sağlamak amacıyla çalışıyoruz. MKSigorta
            olarak, müşterilerimizin ihtiyaçlarına uygun sigorta çözümleri sunarak, onların geleceğini güvence
            altına almayı taahhüt ediyoruz.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8 bg-slate-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold  text-gray-700">Hedeflerimiz</h2>
          <p className="text-gray-700">
            <br />
            <span className="font-semibold">Müşterilerimizin</span> ihtiyaçlarına uygun sigorta çözümleri sunarak, onların geleceğini güvence
            altına almayı taahhüt ediyoruz.
          </p>
        </div>
      </section>
      <section className="container bg-slate-300 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700 text-right">Vizyonumuz</h2>
          <p className="text-gray-700 text-right">
            Vizyonumuz, müşterilerimizin finansal güvenliğini sağlamak ve geleceklerini güvence altına almak
            için en iyi sigorta çözümlerini sunmaktır.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8 bg-slate-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Değerlerimiz</h2>
          <p className="text-gray-700">
            <br />
            <span className="font-semibold">Müşteri odaklılık</span> - Müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi hizmeti sunmak için çalışıyoruz.
            <br />
            <span className="font-semibold">Güvenilirlik</span> - Müşterilerimizin güvenini kazanmak için çalışıyoruz.
            <br />
            <span className="font-semibold">Çalışanlarımız</span> - Çalışanlarımızın gelişimini destekliyoruz ve onlara en iyi çalışma ortamını sağlıyoruz.
            <br />
            <span className="font-semibold">Sosyal sorumluluk</span> - Topluma ve çevreye karşı sorumluluklarımızı yerine getiriyoruz.
          </p>
        </div>
      </section>
      <footer className="bg-blue-500 text-white text-center py-4 px-3 right-0 bottom-[30%] fixed z-50">
        <p>&copy; 2023 MKSigorta</p>
      </footer>
    </div>
  );
};

export default About;
