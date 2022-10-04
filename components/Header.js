import Image from "next/image"

export default function Header() {

    const yconnect = '/yellow-co.png';
    const logPA = '/logo-pa.png';

    return(
        <header className="flex flex-row justify-between">
            <Image src={yconnect} width={100} height={100} alt='Yellow Connect' className="object-contain"/>
            <Image src={logPA} width={40} height={40} alt='Páginas Amarelas' className="object-contain"/>
        </header>
    )
};