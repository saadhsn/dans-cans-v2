export interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  tag: "Residential" | "Commercial" | "Home Reno";
  date: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Kristo Nako",
    role: "Customer",
    text: "Dans Containers was solid all around. They showed up on time, communication was clear and responsive, and the pricing was fair with no surprises. Straightforward, reliable service. Would use them again.",
    rating: 5,
    tag: "Residential",
    date: "Google Review"
  },
  {
    name: "Nancy Dowling",
    role: "Customer",
    text: "Called Dan and he delivered a dumpster within an hour! Placed the dumpster exactly where I asked. His prices are more than reasonable. Dan is a really nice guy, flexible, and honest.",
    rating: 5,
    tag: "Residential",
    date: "Google Review"
  },
  {
    name: "Tony Persaud - Realtor",
    role: "Realtor",
    text: "I had a fantastic experience renting a dumpster from Dan's Cans! They were fast, friendly, and incredibly responsive from start to finish. Their pricing was very affordable, and they went out of their way to accommodate my schedule and needs. Delivery and pickup were seamless, and their customer service was top-notch. I highly recommend them to anyone needing a hassle-free dumpster rental. I’ll definitely be using them again in the future!",
    rating: 5,
    tag: "Commercial",
    date: "Google Review"
  }
];
