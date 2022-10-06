import Image from "next/image";

export default function Hero() {

    const heroImage = '/hero-img.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8 md:mt-2">
                <div className="md:mt-[4rem] md:w-1/2 text-center w-full md:pt-6">
                    <h1 className="text-5xl font-bold md:text-left text-start md:w-9/12">Build strong digital presence!</h1>
                    <h2 className="text-4xl italic font-light pt-2 text-start md:text-left md:w-4/6">Get <span className="font-bold animate-blink">20%</span> off the first 3 months</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">
                            For those who want to claim a share 
                            in this ever-changing market, YELLOW CONNECT is an important part 
                            of strategy to increase your visibility.
                        </p>
                        <p className="leading-relaxed text-justify">
                            With a good digital plan, your business can be on several online 
                            communication channels at the same time, facilitating your 
                            communication with your audience and achieving greater reach.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <Image src={heroImage} width={1090} height={1000} className="object-contain"/>
                </div>
             </div>
        </div>
    );
}