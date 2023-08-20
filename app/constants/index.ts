import { ISlider } from "../types";

const User = [
  {
    name: "Profilim",
    link: "/user",
  },
  {
    name: "Poliçe Oluştur",
    link: "/create-policy",
  },
  {
    name: "Poliçelerim",
    link: "/my-policies",
  },
  {
    name: "İletişim",
    link: "/contact",
  },
];

const slider: ISlider = {
  Image: [
    {
      src: "./general.jpg",
      alt: "slider-1",
      title: "Sigorta Poliçeleri",
      description: "Geniş kapsamlı sigorta poliçelerimizle güvende olun.",
      location: "align-middle top-[20%] left-[10%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#000000]",
    },
    {
      src: "./save-money-and-home.jpg",
      alt: "slider 2",
      title: "Hasar Yönetimi",
      description: "Profesyonel hasar yönetimi hizmetlerimizle yanınızdayız.",
      location: "top-[20%] left-[10%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#FFFFFF]",
    },
    {
      src: "./save-your-health.jpg",
      alt: "slider 3",
      title: "Sağlık Sigortası",
      description: "Sağlık sigortası ile sağlığınızı güvence altına alın.",
      location: "top-[20%] left-[10%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#FFF]",
    },
    {
      src: "./save-your-car.jpg",
      alt: "slider 4",
      title: "Araç Sigortası",
      description: "Araç sigortası ile sürüş deneyiminizi koruyun.",
      location: "bottom-[15%] right-[15%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#FFFFFF]",
    },
    {
      src: "./save-fire.jpg",
      alt: "slider 5",
      title: "Yangın Sigortası",
      description: "Yangın sigortasıyla eviniz ve işletmeniz güvende.",
      location: "top-[20%] left-[15%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#FFFFFF]",
    },
    {
      src: "./save-your-trip.jpg",
      alt: "slider 6",
      title: "Seyahat Sigortası",
      description: "Seyahat sigortası ile rahat bir seyahat deneyimi yaşayın.",
      location: "bottom-[10%] right-[15%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#000000]",
    },
    {
      src: "./save-your-workplace.jpg",
      alt: "slider 7",
      title: "İş Yeri Sigortası",
      description: "İş yeri sigortasıyla işinizi riske atmayın.",
      location: "top-[5%] right-[15%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#FFF]",
    },
    {
      src: "./retired-people.jpg",
      alt: "slider 8",
      title: "Emeklilik Planları",
      description: "Geleceğiniz için güvenilir emeklilik planları sunuyoruz.",
      location: "top-[15%] left-[15%]",
      bgColor: "backdrop-blur-xl shadow-3xl",
      textColor: "text-[#000]",
    },
    {
      src: "./save-your-furnitures.jpg",
      alt: "slider 9",
      title: "Eşya Sigortası",
      description: "Eşya sigortasıyla değerli eşyalarınızı koruma altına alın.",
      location: "top-[5%] right-[15%]",
      bgColor: "backdrop-blur-lg",
      textColor: "text-[#000]",
    },
  ],
};

const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      {
        title: "Instagram",
        url: "https://www.instagram.com/mustafa_kurtulmus_sigorta/",
      },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

const About = [
  {
    aboutTitle: "Biz Kimiz?",
    aboutText: "Sigorta poliçeleri oluşturmak için doğru yerdesiniz.",
  },
];

export { User, slider, footerLinks, About };
