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
    name: "Michael R.",
    role: "Homeowner",
    text: "Ordered a 15-yard bin for a garage cleanout. The delivery was exactly where I asked, and they used boards to protect my new driveway. Highly recommend!",
    rating: 5,
    tag: "Residential",
    date: "2 days ago"
  },
  {
    name: "Sarah Jenkins",
    role: "Project Manager",
    text: "Dans Cans is our go-to for job sites. On-time swaps and clear pricing. No surprise 'overweight' fees like the big national companies.",
    rating: 5,
    tag: "Commercial",
    date: "1 week ago"
  },
  {
    name: "David L.",
    role: "DIY Enthusiast",
    text: "The website made it so easy to pick a size. I wasn't sure what I needed, but the pickup truck comparison was spot on. 10/10 service.",
    rating: 5,
    tag: "Home Reno",
    date: "3 weeks ago"
  }
];