import Image from "next/image";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8 text-[#f8f8ff]">
                <div className="md:w-1/2 w-full md:mt-16 pb-8 md:ml-6">
                    <h1 className="text-5xl font-bold md:w-96 md:text-left text-center text-[#FBED04]">Aposte cada vez mais no digital</h1>
                    <h2 className="text-2xl italic font-light pt-2 md:w-96 md:text-left text-center">
                        <span className="font-bold">Divulgue seu negócio no print e no digital! </span>
                        Com o pacote Yellow Connect</h2>
                    <div className="pt-8 md:w-96">
                        <p className="leading-relaxed md:text-left text-center">
                            Para quem quer reivindicar uma share deste mercado em constante
                            mudança, a YELLOW CONNECT é peça importante da estratégia 
                            de aumentar a sua visibilidade.
                        </p><br/>
                        <p className="leading-relaxed md:text-left text-center">
                            Com uma boa estratégia digital será possível que seu negócio
                             esteja em vários canais de comunicação on-line ao mesmo tempo, 
                             facilitando a sua comunicação com o seu público e obtendo maior alcance.
                        </p>
                    </div>
                </div>
              <div className="md:w-1/2 w-full">
                <Image src={heroImage} width={1090} height={1000} alt="" className="object-contain"/>
              </div>
             </div>
        </div>
    );
}