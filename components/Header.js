import Image from "next/image"

export default function Header() {

    const yconnect = '/yellow-co.png';
    const logPA = '/logo-pa.png';

    return(
        <header className="flex flex-row justify-between  md:px-24">
            <Image src={yconnect} width={150} height={150} alt='Yellow Connect' className="object-contain"/>
            <Image src={logPA} width={50} height={50} alt='Páginas Amarelas' className="object-contain"/>
        </header>
    )
};