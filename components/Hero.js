import Image from "next/image";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8 text-[#f8f8ff]">
                <div className="md:w-1/2 w-full md:mt-16 pb-8 md:ml-6">
                    <h1 className="text-5xl font-bold md:w-[26rem] md:text-left text-center text-[#FBED04]">Jenga uwepo thabiti wa kidijitali</h1>
                    <h2 className="text-2xl italic font-light pt-2 md:w-96 md:text-left text-center">
                        <span className="font-bold">Tangaza biashara yako kwa uchapishaji na kidijitali! </span>
                            Kwa kifurushi cha Yellow Connect.</h2>
                    <div className="pt-8 md:w-96">
                        <p className="leading-relaxed md:text-left text-center">
                            Kwa wale wanaotaka kudai hisa katika soko hili linalobadilika kila mara, YELLOW CONNECT ni sehemu muhimu ya mkakati wa kuongeza mwonekano wako.
                        </p><br/>
                        <p className="leading-relaxed md:text-left text-center">
                            Ukiwa na mpango mzuri wa kidijitali, biashara yako inaweza kuwa kwenye sehemu kadhaa za mawasiliano ya mtandaoni kwa wakati mmoja, na kufikia hadhira kubwa.
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