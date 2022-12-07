import Image from "next/image";
import Lead from "./Lead";

export default function Hero() {

    const heroImage = '/black-friday.png';

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8 text-[#f8f8ff]">
                <Lead />                

              <div className="md:w-1/2 w-full">
                {/*<Image src={heroImage} width={1090} height={1000} alt="" className="object-contain"/>*/}
              </div>
             </div>
        </div>
    );
}