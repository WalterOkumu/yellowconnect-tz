import Image from "next/image";
import Lead from "./Lead";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse md:gap-8 text-[#f8f8ff] items-center">

              <div className="md:w-1/2 w-full self-center">
                <Lead />
              </div>

              <div className="md:w-1/2 w-full self-center">
                <Image src={heroImage} width={1090} height={1000} alt="black friday" className="object-contain" layout="responsive" priority/>
              </div>
             </div>
        </div>
    );
}