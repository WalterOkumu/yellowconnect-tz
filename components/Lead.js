

export default function Lead() {
    return(
        <section className="mt-28 mx-auto md:w-2/4 px-4">
            <h3 className="text-3xl font-bold text-center font-Roboto">Preencha os campos abaixo para obter 
                gratuitamente a informação desejada</h3>
            <div className="flex flex-col justify-center items-center gap-4 mt-8">
                <div>
                    <label htmlFor="nome" className="font-bold text-sm">Nome: </label>
                    <input type='text' name='nome' id="nome" className="border w-80"/>
                </div>
                <div>
                    <label htmlFor="email" className="font-bold text-sm">E-mail: </label>
                    <input type='text' name='email' id="email" className="border w-80"/>
                </div>
                <div className="mr-4">
                    <label htmlFor="empresa" className="font-bold text-sm">Empresa: </label>
                    <input type='text' name='empresa' id="empresa" className="border w-80"/>
                </div>
                <button className="bg-[#FBED04] mt-2 px-8 py-1 mx-auto rounded font-bold text-sm md:w-auto w-1/2">Submeter</button>
            </div>
        </section>
    );
}