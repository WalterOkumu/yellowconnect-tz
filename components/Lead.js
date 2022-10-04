

export default function Lead() {
    return(
        <section className="mt-28 mx-auto w-2/4">
            <h3 className="text-3xl font-bold text-center">Preencha os campos abaixo para obter 
                gratuitamente a informação desejada</h3>
            <div className="flex flex-col justify-center items-center gap-8 mt-8">
                <div>
                    <label htmlfor="nome" className="font-bold text-sm">Nome</label>
                    <input type='text' name='nome' id="nome" className="border ml-8 w-80"/>
                </div>
                <div>
                    <label htmlfor="email" className="font-bold text-sm">E-mail</label>
                    <input type='text' name='email' id="email" className="border ml-8 w-80"/>
                </div>
                <div>
                    <label htmlfor="empresa" className="font-bold text-sm">Empresa</label>
                    <input type='text' name='empresa' id="empresa" className="border ml-4 w-80"/>
                </div>
                <button className="bg-[#f2f000] mt-2 px-8 py-1 rounded font-bold text-sm">Submeter</button>
            </div>
        </section>
    );
}