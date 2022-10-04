import Image from "next/image";

export default function Hero() {

    const heroImage = '/hero-image.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex">
                <div className="pt-24 pr-16 w-1/2">
                    <h1 className="text-4xl font-bold">Aposte cada vez mais no digital</h1>
                    <h2 className="text-2xl italic font-light pt-2">Ganhe 20% de desconto nos primeiros 3 meses</h2>
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
                <div className="pb-[-32rem] w-1/2">
                    <Image src={heroImage} width={1090} height={1000}/>
                </div>
                </div>
        </div>
    );
}