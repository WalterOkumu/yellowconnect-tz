import Image from "next/image";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {

    const profile = '/profile.jpg';

    return(
        <section className="mt-28 mx-auto">
            <h3 className="text-3xl font-bold text-center">Testemunho de clientes</h3>
            <div className="flex flex-row justify-center items-center mt-8">
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
            </div>
        </section>
    );
}