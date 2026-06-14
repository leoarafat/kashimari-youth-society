/* ============================================================================
   SITE CONTENT — EDIT EVERYTHING HERE
   Every section of the site reads from this file. To update text, images,
   team members, events, etc., change the values below. No component edits needed.
   Replace any Unsplash/picsum image URL with your own (e.g. "/images/your.jpg").
   ========================================================================== */

import {
  Baby, Dice5, ShieldAlert, Pill, GraduationCap, Sparkles,
  Facebook, Instagram, Youtube, MessageCircle,
} from "lucide-react";

export const org = {
  name: "Kashimari Youth Society",
  shortName: "KYS",
  tagline: "Empowering Youth, Building a Better Society",
  email: "info@kashimariyouthsociety.org",
  phone: "+880 1700 000000",
  address: "Kashimari, Shyamnagar, Satkhira, Bangladesh",
  established: 2018,
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Empowering Youth, Building a Better Society",
  sub: "Kashimari Youth Society works to create awareness, prevent social crimes, and inspire positive change in our community.",
  primaryCta: { label: "Join Our Mission", href: "#volunteer" },
  secondaryCta: { label: "Explore Activities", href: "#activities" },
  image:
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
};

export const about = {
  who: "Kashimari Youth Society is a youth-led social welfare organization dedicated to building a safe, educated, and progressive community. We bring young people together to stand against social harms and to lift up those who need support.",
  vision:
    "A society free from social injustice and harmful practices, where every young person can grow in safety and dignity.",
  mission:
    "Educating people and promoting positive social values through campaigns, support programs, and grassroots community action.",
};

export const stats = [
  { value: 500, suffix: "+", label: "Community Members" },
  { value: 25, suffix: "+", label: "Awareness Campaigns" },
  { value: 15, suffix: "+", label: "Social Initiatives" },
  { value: 1000, suffix: "+", label: "People Reached" },
];

export const activities = [
  { icon: Baby, title: "Anti Child Marriage Campaign", desc: "Door-to-door awareness and school sessions to stop early marriage and protect children's futures.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" },
  { icon: Dice5, title: "Anti Gambling Awareness", desc: "Community talks on the financial and social harm of gambling, with support for affected families.", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" },
  { icon: Pill, title: "Anti Drug Campaign", desc: "Youth-led rallies and counselling to keep our neighbourhoods free from drug abuse and addiction.", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80" },
  { icon: ShieldAlert, title: "Women Safety & Eve Teasing Prevention", desc: "Safe-space programs and rapid-response volunteer networks to prevent harassment.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" },
  { icon: GraduationCap, title: "Educational Support Programs", desc: "Free coaching, book drives, and scholarships for underprivileged students.", image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80" },
  { icon: Sparkles, title: "Community Cleanliness Drives", desc: "Regular clean-ups and tree planting to keep Kashimari green and healthy.", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" },
];

export const projects = [
  { name: "Stop Child Marriage 2024", date: "March 2024", desc: "A six-month campaign across 12 villages reaching over 400 families.", image: "https://picsum.photos/seed/kys-proj1/800/600" },
  { name: "Winter Warmth Drive", date: "December 2023", desc: "Distributed blankets and warm clothing to 300 underprivileged people.", image: "https://picsum.photos/seed/kys-proj2/800/600" },
  { name: "Youth Skills Workshop", date: "August 2023", desc: "Free computer and freelancing training for 80 local youths.", image: "https://picsum.photos/seed/kys-proj3/800/600" },
  { name: "Clean River Initiative", date: "May 2023", desc: "Cleaned 4km of riverbank and planted 500 saplings.", image: "https://picsum.photos/seed/kys-proj4/800/600" },
];

export const gallery = [
  "https://picsum.photos/seed/kys-g1/600/800",
  "https://picsum.photos/seed/kys-g2/600/500",
  "https://picsum.photos/seed/kys-g3/600/700",
  "https://picsum.photos/seed/kys-g4/600/450",
  "https://picsum.photos/seed/kys-g5/600/650",
  "https://picsum.photos/seed/kys-g6/600/520",
  "https://picsum.photos/seed/kys-g7/600/760",
  "https://picsum.photos/seed/kys-g8/600/480",
];

export const team = [
  { name: "Muzahidul Ahsan Albanna", role: "Member", photo: "https://picsum.photos/seed/kys-t1/400/400" },
  { name: "Yeasin Arafat", role: "Member", photo: "https://picsum.photos/seed/kys-t2/400/400" },
  { name: "Saddam Hossain", role: "Member", photo: "https://picsum.photos/seed/kys-t3/400/400" },
  { name: "Touhidul Hasan Sobuj", role: "Member", photo: "https://picsum.photos/seed/kys-t4/400/400" },
  { name: "Masud Alam", role: "Member", photo: "https://picsum.photos/seed/kys-t5/400/400" },
  { name: "Sohag Hossain", role: "Member", photo: "https://picsum.photos/seed/kys-t6/400/400" },
];

export const achievements = [
  { year: "2018", title: "Organization Established", desc: "A group of 12 young volunteers founded Kashimari Youth Society." },
  { year: "2019", title: "First Awareness Campaign", desc: "Our first anti–child-marriage drive reached 6 villages." },
  { year: "2021", title: "Community Outreach Program", desc: "Launched winter relief and education support across the union." },
  { year: "2023", title: "Youth Development Workshop", desc: "Trained 80 youths in digital and life skills." },
];

export const events = [
  { name: "Annual Awareness Rally", date: "July 25, 2026", location: "Kashimari Bazar", desc: "A community march against drug abuse and child marriage.", image: "https://picsum.photos/seed/kys-e1/800/500" },
  { name: "Free Health Camp", date: "August 12, 2026", location: "Union Parishad Field", desc: "Free check-ups and medicine for 500 villagers.", image: "https://picsum.photos/seed/kys-e2/800/500" },
  { name: "Education Scholarship Day", date: "September 5, 2026", location: "Kashimari High School", desc: "Awarding scholarships to 40 meritorious students.", image: "https://picsum.photos/seed/kys-e3/800/500" },
];

export const testimonials = [
  { name: "Abdul Karim", role: "Local Farmer", text: "They helped my daughter stay in school instead of marrying early. I am grateful forever." },
  { name: "Rohima Begum", role: "Community Member", text: "The winter blankets reached us when we needed them most. These young people truly care." },
  { name: "Jahangir Alam", role: "School Teacher", text: "Their awareness sessions changed how our students think about drugs and harassment." },
];

export const blog = [
  { title: "How Youth Can Lead Social Change", category: "Awareness", date: "June 1, 2026", excerpt: "Young people are the strongest force for change in any community. Here's how we channel that energy.", image: "https://picsum.photos/seed/kys-b1/800/500" },
  { title: "5 Ways to Stop Child Marriage in Your Village", category: "Campaign", date: "May 18, 2026", excerpt: "Practical, community-tested steps that families and neighbours can take today.", image: "https://picsum.photos/seed/kys-b2/800/500" },
  { title: "Inside Our Free Skills Workshop", category: "Education", date: "April 30, 2026", excerpt: "A look at how 80 local youths learned digital skills that opened new income paths.", image: "https://picsum.photos/seed/kys-b3/800/500" },
];

export const donationImpact = [
  { amount: "৳500", impact: "Provides school supplies for one child for a term." },
  { amount: "৳2,000", impact: "Funds a full awareness session in one village." },
  { amount: "৳5,000", impact: "Supports a family with winter relief and food." },
];

// Placeholder donation accounts — replace with real details when available.
export const donationAccounts = [
  { label: "bKash", number: "+880 1700 000000", holder: "Kashimari Youth Society" },
  { label: "Nagad", number: "+880 1700 000000", holder: "Kashimari Youth Society" },
  { label: "Bank (Sonali)", number: "1234 5678 9012 3456", holder: "Kashimari Youth Society" },
];

export const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
];
