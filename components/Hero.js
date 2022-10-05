import Image from "next/image";

export default function Hero() {

    const heroImage = '/hero-img.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse">
                <div className="md:pt-24 pt-20 md:pr-16 px-2 md:w-1/2 text-center w-full pb-6">
                    <h1 className="text-4xl font-bold md:text-left md:w-4/6">Aposte cada vez mais no digital</h1>
                    <h2 className="text-2xl italic font-light pt-2 md:text-left md:w-4/6">Ganhe 20% de desconto nos primeiros 3 meses</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">Para quem quer reinvindicar uma share deste
                            mercado em constante mudança, a YELLOW
                            CONNECT é peça importante da estratégia de
                            aumentar a sua visibilidade.
                        </p>
                        <p className="leading-relaxed pt-4 text-justify">
                            Com uma boa estratégia digital será possível que
                            seu negócio esteja em vários canais de
                            comunicação on-line ao mesmo tempo, facilitando a
                            sua comunicação com o seu público e obtendo
                            maior alcance.
                        </p>
                    </div>
                </div>
                <div className="md:pb-[-32rem] md:w-1/2 w-full">
                    <Image src={heroImage} width={1600} height={1500} />
                </div>
             </div>
        </div>
    );
}