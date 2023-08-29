const About = () => {
  return (
    <div className='flex flex-col items-center  my-20 mr-10'>
      <section className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-semibold mb-4">Kimiz?</h2>
        <p className="text-gray-700">
          MKSigorta, 2007 yılında Mustafa Kurtulmuş tarafından kurulan bir sigorta şirketidir.
          <br />
          <span className="font-semibold">birikim ve deneyimle</span> yola çıktık ve başlangıçta
          küçük bir ofiste hizmet vermeye başladık. Ancak bugün, Türkiye'nin dört bir yanındaki müşterilere
          hizmet veren saygın bir sigorta kuruluşu haline geldik.
        </p>
      </section>
      <section className="bg-gray-200 py-8 mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Misyonumuz</h2>
          <p className="text-gray-700">
            Misyonumuz, müşterilerimize finansal güvence sağlamaktır. Hayatın her döneminde, her türlü
            riski öngörmek ve bu risklere karşı en iyi korumayı sağlamak amacıyla çalışıyoruz. MKSigorta
            olarak, müşterilerimizin ihtiyaçlarına uygun sigorta çözümleri sunarak, onların geleceğini güvence
            altına almayı taahhüt ediyoruz.
          </p>
        </div>
      </section>
      <footer className="bg-blue-500 text-white py-4 text-center p-3 right-0 top-[10%] fixed">
        <p>&copy; 2023 MKSigorta</p>
      </footer>
    </div>
  );
};

export default About;
