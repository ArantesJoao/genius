import Stripe from "stripe";

export const stripe = new Stripe(process.env.SECRET_STRIPE_KEY!, {
    typescript: true,
    apiVersion: "2024-04-10"
})

