/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaApple, FaChevronDown, FaGooglePlay, FaYandex } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";
const phone = "./assets/phone.png";
const huawie = "./assets/huavie.png";
const ondo = "./assets/ondo.png";
const insta = "./assets/insta.png";
const tiktok = "./assets/tiktok.png";
const tgram = "./assets/tgram.png";
const facebook = "./assets/facebook.png";
// const QB = "./assets/QB.png";
const Footer = () => {
  return (
    <footer>
      <section className="bg-slate-200">
        <div className="flex container justify-between max-w-7xl gap-8  items-center">
          <img
            src={phone}
            alt="this is phone"
            className="h-[422px] w-[433px] relative"
          />
          <div className="flex items-start gap-9 flex-col">
            <h1 className="flex font-semibold text-[32px] w-[380px]">
              Ajoyib takliflar har doim yoningizda
            </h1>
            <p className="flex text-[18px] w-[480px]">
              alif shop ilovasi orqali buyurtma qiling, va qulay takliflar
              haqida hammadan tez biling
            </p>
            <div className="flex justify-between gap-7  items-center">
              <div className="flex bg-black cursor-pointer px-2 w-[210px] h-[74px] rounded-md items-center justify-center gap-5  py-1">
                <FaGooglePlay color="white" size={28} />
                <div className="flex text-white flex-col">
                  <span className="text-[14px] font-semibold">GET IT ON</span>
                  <p className="text-[18px] font-bold"> Google Play</p>
                </div>
              </div>
              <div className="flex bg-black cursor-pointer px-2 w-[210px] h-[74px] rounded-md items-center justify-center gap-5  py-1">
                <FaApple color="white" size={38} />
                <div className="flex text-white flex-col ">
                  <span className="text-[14px] font-semibold">
                    Download on the
                  </span>
                  <p className="text-[18px] font-bold"> App Store</p>
                </div>
              </div>
              <div className="flex bg-black cursor-pointer px-2 w-[210px] h-[74px] rounded-md items-center justify-center gap-5  py-1">
                <img
                  src={huawie}
                  alt="this is huawie icons"
                  className="w-[32px] h-[32px]"
                />
                <div className="flex text-white  flex-col ">
                  <span className="text-[14px] font-semibold">
                    AVAILABLE ON{" "}
                  </span>
                  <p className="text-[18px] font-bold"> App Gallery</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <MdQrCode2 size={156} className="border -p-2 border-gray-500" />
            <p className="w-[248px] text-center">
              Yuklab olish uchun kamerangizni QR kodga qarating
            </p>
          </div>
        </div>
      </section>
      <div className="flex bg-slate-300 h-[1px]"></div>
      <div className="flex container justify-between max-w-7xl pb-[25px] gap-8 px-8 mx-auto items-start mt-5">
        <div className="flex flex-col  w-[394px] gap-3">
          <h1 className="font-semibold text-[20px]">ali shop</h1>
          <p>
            alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni
            sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida
            smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa
            ko'plab moslamalarni topishingiz mumkin.
          </p>
          <span className="font-semibold flex items-center gap-2 text-blue-500 text-[22px]">
            Barchasini ko'rsatish <FaChevronDown className="text-blue-500" />
          </span>
        </div>
        <div className="flex flex-col  w-[394px] gap-3">
          <h1 className="font-semibold text-[20px]">
            Smartfonlar muddatli to'lov asosida
          </h1>
          <p>
            Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik
            hayotimizning ajralmas qismiga aylandi. Zamonaviy telefonlarning
            ilovalari va texnik parametrlari tufayli smartfonlar ko'pincha
            bizning kompyuterlarimiz, kameralarimiz,
          </p>
          <span className="font-semibold flex items-center gap-2 text-blue-500 text-[22px]">
            Barchasini ko'rsatish <FaChevronDown className="text-blue-500" />
          </span>
        </div>
        <div className="flex flex-col  w-[394px] gap-3">
          <h1 className="font-semibold text-[20px]">
            Noutbuklar muddatli to'lov asosida
          </h1>
          <p>
            Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish va
            shu bilan birga bo'sh vaqtimizni unumli o'tkazish imkoniyatini
            beradi. Masalan, noutbuk yordamida tezda dunyoning istalgan
            nuqtasidan, turli xil ishlarni bajarishingiz
          </p>
          <span className="font-semibold flex items-center gap-2 text-blue-500 text-[22px]">
            Barchasini ko'rsatish <FaChevronDown className="text-blue-500" />
          </span>
        </div>
        <div className="flex flex-col  w-[394px] gap-3">
          <h1 className="font-semibold text-[20px]">
            Jihozlar muddatli to'lov asosida
          </h1>
          <p>
            Bizning online do'konda elektronikadan tashqari, turli xil maishiy
            texnika mavjud: gaz plitalari, grill tayyorlagichlar, muzlatgichlar,
            kir yuvish mashinalari, dazmollar, konditsionerlar va boshqa ko'plab
            almashtirib bo'lmaydigan narsalar.
          </p>
          <span className="font-semibold flex items-center gap-2 text-blue-500 text-[22px]">
            Barchasini ko'rsatish <FaChevronDown className="text-blue-500" />
          </span>
        </div>
      </div>
      <section className="bg-black pt-[60px] flex-col flex ">
        <div className="flex container mx-auto justify-between max-w-7xl">
          <ul className="flex flex-col gap-3">
            <h1 className="flex text-gray-400">Hujjatlar</h1>
            <li className="text-white text-sm tracking-wide	">
              Sotish uchun umumiy shartlar
            </li>
            <li className="text-white text-sm tracking-wide	">
              Ofertalar arxivi
            </li>
            <li className="text-white text-sm tracking-wide	">Nizom</li>
            <li className="text-white text-sm tracking-wide	">Guvohnoma</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h1 className="flex text-gray-400">Servis</h1>
            <li className="text-white text-sm tracking-wide	">Namoz vaqti</li>
            <li className="text-white text-sm tracking-wide	">
              Muddatli to'lov islomda
            </li>
            <li className="text-white text-sm tracking-wide	">
              alif shopda soting!
            </li>
            <li className="text-white text-sm tracking-wide	">Qaytarish</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h1 className="flex text-gray-400 tracking-wide	">
              Tovarlar katalogi
            </h1>
            <li className="text-white text-sm tracking-wide	">Gadjetlar</li>
            <li className="text-white text-sm tracking-wide	">
              Smartfonlar va telefonlar
            </li>
            <li className="text-white text-sm tracking-wide	">
              Tegishli tovarlar
            </li>
            <li className="text-white text-sm tracking-wide	">
              Soat va aksessuarlar
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h1 className="flex text-gray-400">
              Biz ijtimoiy axborot vositalarida
            </h1>
            <li className="flex items-center gap-4">
              <img src={insta} alt="this is instagram" />
              <img src={facebook} alt="this is facebook" />
              <img src={tgram} alt="this is tgram" />
              <img src={ondo} alt="this is odnoklaniki7" />
              <img src={tiktok} alt="this is odnoklaniki7" />
            </li>
            <li className="text-gray-400 text-sm tracking-wide	">
              Axborot xizmati
            </li>
            <li className="text-white text-md tracking-wide	">@alifshop_uz </li>
            <li className="text-white text-md tracking-wide	">
              +998 555 12 12 12{" "}
            </li>
          </ul>
        </div>
        <div className="flex mx-auto max-w-7xl bg-gray-400 w-full my-5 h-[1px]"></div>
        <div className="mx-auto max-w-7xl container py-8">
          <div className="flex justify-between w-full ">
            <span className="text-gray-400 font-semibold ">
              2024 © alifshop.uz
            </span>
            <div className="flex items-center bg-slate-400 gap-3 px-2 py-1 rounded-md ">
              <FaYandex color="red" size={22}/>
              <span className="text-white font-bold">450</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
