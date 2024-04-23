"use client"

import { testimonials } from "@/consts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import test from "node:test";

const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold">
                Testimonials
            </h2>
            <p className="text-red-400 font-extralight antialiased text-sm text-center mb-10">
                Disclaimer: the following testimonials are NOT REAL! They are sample testimonials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{testimonial.name}</p>
                                    <p className="text-zing-400 text-sm">{testimonial.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {testimonial.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default LandingContent;