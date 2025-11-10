"use client"

import { Award, Bed, Briefcase, Calendar, Crown, Facebook, Gift, Heart, Instagram, MapPin, Sparkles, Star, ThumbsUp, Trophy, Twitter, Users } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="plain"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Dining", id: "dining" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Estonia Grand Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Estonian Elegance"
          description="Discover luxury accommodation in the heart of Estonia, where Nordic sophistication meets warm hospitality and rich cultural heritage."
          tag="Welcome"
          tagIcon={Crown}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://pixabay.com/get/g39be812782636a9528071bf2a9e12d7d07c401512afea0fc5613b83b5e68cd548563b5008f4d8c6a1b7f8132fc193237fecf9026f63c2a1490b1fc1cb1cf3c79_1280.jpg"
          imageAlt="Estonia Grand Hotel exterior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="Located in the enchanting landscape of Estonia, our hotel combines traditional Nordic hospitality with modern luxury. We offer our guests an authentic Estonian experience, featuring locally-inspired design, regional cuisine, and personalized service that reflects the warmth and sophistication of Estonian culture."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Premium Amenities"
          description="Discover the exceptional services and facilities that make your stay unforgettable"
          tag="Experience"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind in our world-class spa featuring traditional Nordic treatments",
              imageSrc: "https://pixabay.com/get/g7f235c47323cba8c62df0b90890a48aebf6a0e6f3bf214a654382baf4cb0394bebd60969edf0d07b94cc1b6d5224f3e07a027bf3b71021f5fdaa319aa8406a3c_1280.jpg",
              imageAlt: "Luxury spa wellness center"
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite Estonian cuisine crafted by renowned chefs using local, seasonal ingredients",
              imageSrc: "https://pixabay.com/get/g669282948d434f87a948f196993f52862df5e780d1897dc6e748e0d85a622d3c1a2ccced41df0dbad818d1eee6f4c25a87d6b528e1769be957ae6e98c29795bd_1280.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              title: "Concierge Services",
              description: "Our dedicated team provides personalized assistance to enhance every aspect of your stay",
              imageSrc: "https://pixabay.com/get/g097100c4925c818709350eea2e9fcf13aeb39eeca7c96df32021c7602fe500d58ce3100b63572c6f8182a263aadd709e3dc12d11f1a1840dfeb83adad6188c2c_1280.jpg",
              imageAlt: "Professional concierge service"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering comfort and elegance"
          tag="Rooms & Suites"
          tagIcon={Bed}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "deluxe-room",
              name: "Deluxe Room",
              price: "€189/night",
              imageSrc: "https://pixabay.com/get/gd80ac568482a0da83baa94a1ffae12342c8a393d85c536fe97a6bc90b5e0914b485066bf2e08066094188318f1fa900ac37e3d4380930b469db4b653fab1fd1c_1280.jpg",
              imageAlt: "Deluxe hotel room"
            },
            {
              id: "executive-suite",
              name: "Executive Suite",
              price: "€349/night",
              imageSrc: "https://pixabay.com/get/g06725014a4c55b6c2b1286490d8339f3a15892c9226ec191b8107c1ff97bc0e4847475312c9afaa0fe7b421525b6d9a6b47dd321409231c55c64940425865b3b_1280.jpg",
              imageAlt: "Executive suite"
            },
            {
              id: "presidential-suite",
              name: "Presidential Suite",
              price: "€599/night",
              imageSrc: "https://pixabay.com/get/gce1b6cc8221668e22b32cc053c42cfb4f3154879ca4779383a1afbcd02e8a1ce290757e8188c09757c609436d8b1d0c79a33cecf525e9b3be7dc115eb6c0cfea_1280.jpg",
              imageAlt: "Presidential suite"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Special Packages"
          description="Discover our curated stay packages designed to enhance your Estonian experience"
          tag="Packages"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "romantic-getaway",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "€499",
              subtitle: "Perfect for couples seeking romance",
              buttons: [
                { text: "Book Package", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "2 nights luxury accommodation",
                "Champagne & chocolates upon arrival",
                "Couples spa treatment",
                "Candlelit dinner for two",
                "Late checkout included"
              ]
            },
            {
              id: "business-excellence",
              badge: "Business Choice",
              badgeIcon: Briefcase,
              price: "€299",
              subtitle: "Ideal for business travelers",
              buttons: [
                { text: "Book Package", href: "contact" },
                { text: "View Details", href: "about" }
              ],
              features: [
                "Executive suite accommodation",
                "High-speed WiFi & workspace",
                "Airport transfer included",
                "Business center access",
                "Complimentary breakfast"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality reflected in guest satisfaction"
          tag="Achievements"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "satisfaction",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating based on reviews",
              icon: ThumbsUp
            },
            {
              id: "years",
              value: "25+",
              title: "years",
              description: "Years of exceptional hospitality service",
              icon: Calendar
            },
            {
              id: "guests",
              value: "50K+",
              title: "guests",
              description: "Satisfied guests from around the world",
              icon: Users
            },
            {
              id: "awards",
              value: "15",
              title: "awards",
              description: "Hospitality excellence awards received",
              icon: Trophy
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Dedicated professionals committed to making your stay exceptional"
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="opacity"
          members={[
            {
              id: "general-manager",
              name: "Kristjan Väli",
              role: "General Manager",
              imageSrc: "https://pixabay.com/get/g58d47734d5900e8748635d8d677b286249ff661d019fb0fe21c7691537dad8fc3943e825d81b0f23b074430ce5237c09953ba3156aa366e44696125b38508df0_1280.jpg",
              imageAlt: "Kristjan Väli portrait"
            },
            {
              id: "head-chef",
              name: "Maria Kask",
              role: "Head Chef",
              imageSrc: "https://pixabay.com/get/g27a84b72ab6d372049a9b498870245a74c68ca136ddb228388046d2db52c89abdbb2e6e8c61ea420f3b9588b3947918c0b7adf175ce94b2e2d124b0c75d131a2_1280.jpg",
              imageAlt: "Maria Kask portrait"
            },
            {
              id: "concierge",
              name: "Andreas Tamm",
              role: "Head Concierge",
              imageSrc: "https://pixabay.com/get/g58d47734d5900e8748635d8d677b286249ff661d019fb0fe21c7691537dad8fc3943e825d81b0f23b074430ce5237c09953ba3156aa366e44696125b38508df0_1280.jpg",
              imageAlt: "Andreas Tamm portrait"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear what our guests say about their memorable stays"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Williams",
              role: "Travel Blogger",
              company: "Wanderlust Magazine",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g27a84b72ab6d372049a9b498870245a74c68ca136ddb228388046d2db52c89abdbb2e6e8c61ea420f3b9588b3947918c0b7adf175ce94b2e2d124b0c75d131a2_1280.jpg",
              imageAlt: "Sarah Williams portrait"
            },
            {
              id: "2",
              name: "Henrik Nielsen",
              role: "Business Executive",
              company: "Nordic Enterprises",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g58d47734d5900e8748635d8d677b286249ff661d019fb0fe21c7691537dad8fc3943e825d81b0f23b074430ce5237c09953ba3156aa366e44696125b38508df0_1280.jpg",
              imageAlt: "Henrik Nielsen portrait"
            },
            {
              id: "3",
              name: "Emma & James",
              role: "Honeymooners",
              company: "Anniversary Celebration",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9acfcb98aa03406ccdc8d5221c09937e75df114bfa1c4cadea921e8a437fc1e2ff9610398e7cc299390ce2075f4ced9ce200fcf13b710789412d3ef6f4210c97_1280.jpg",
              imageAlt: "Emma and James couple"
            },
            {
              id: "4",
              name: "The Anderson Family",
              role: "Family Vacation",
              company: "Summer Holiday",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g04f527daa64d475373d35fb6e7c4e1284144f7c7a51602f6d06cc3a85a725fced0ef00330d2b8d652e2a8b39a5422d6dc77a11a7f74a6a7e7e90951afd12a088_1280.jpg",
              imageAlt: "Anderson family portrait"
            },
            {
              id: "5",
              name: "Robert & Margaret",
              role: "Anniversary Guests",
              company: "Golden Wedding",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf5489d64bf7f844fa40a0810251e1dbf155dc76327ab09e43bad7cf85b868959ad328723c013111c9bd73f77a012d35a1546b960999bbe182b4c015123d5a269_1280.jpg",
              imageAlt: "Robert and Margaret couple"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about your stay"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide airport shuttle service for our guests. Please contact our concierge team to arrange pickup and drop-off times."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Our hotel features a fine dining restaurant serving Estonian and international cuisine, a casual café, and 24-hour room service."
            },
            {
              id: "4",
              title: "Is WiFi included in the room rate?",
              content: "Yes, complimentary high-speed WiFi is available throughout the hotel, including all guest rooms and public areas."
            },
            {
              id: "5",
              title: "Do you allow pets?",
              content: "We welcome well-behaved pets with advance notice. A pet fee may apply, and certain restrictions may be in place."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Discover Estonia"
          description="Explore the beauty and culture of Estonia through our travel insights"
          tag="Travel Guide"
          tagIcon={MapPin}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              tags: ["Culture", "History"],
              title: "Exploring Tallinn's Medieval Old Town",
              excerpt: "Discover the cobblestone streets and Gothic architecture of one of Europe's best-preserved medieval cities",
              imageSrc: "https://pixabay.com/get/g13043c048c76f45b8a24b5b2a853034c9fbba78c68a1a235cab82f35e024c164d4d9d7ac7560aab035261cae958f909ce4fd9ff7dfd171116607591481ea312b_1280.jpg",
              imageAlt: "Tallinn old town",
              authorName: "Estonia Tourism",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              tags: ["Nature", "Adventure"],
              title: "Baltic Coast Adventures",
              excerpt: "Experience Estonia's stunning coastline with pristine beaches, charming fishing villages, and natural parks",
              imageSrc: "https://pixabay.com/get/g0399a7afb3f09cc9d4283d5ab8958f2110cf2dc09be072917203ae2d7eaf4d9281a9c5459a802c7169fd9b84fa4f283b211f0e1980f12e422e9afb2cbbb99c14_1280.jpg",
              imageAlt: "Baltic Sea coast",
              authorName: "Travel Estonia",
              date: "10 Dec 2024"
            },
            {
              id: "3",
              tags: ["Food", "Culture"],
              title: "Estonian Culinary Traditions",
              excerpt: "Taste the authentic flavors of Estonian cuisine, from hearty traditional dishes to modern Nordic gastronomy",
              imageSrc: "https://pixabay.com/get/gfc478535e19cedad57381dffa4fd682c37d3f5afa6782373930af1722f88df22c2c4e73cf0f470c96de092beaeeb91bb2477efc04f2fcd694b8a7237245846c7_1280.jpg",
              imageAlt: "Estonian cuisine",
              authorName: "Chef Maria Kask",
              date: "5 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Contact our reservations team to book your accommodation or inquire about our services and packages."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkout", type: "date", placeholder: "Check-out Date", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Inquiry"
          imageSrc="https://pixabay.com/get/g6f4b0a9e7f9520a8c12fb8edae14f8a0b3c52170a249b4cd0a2b877da3d83ae99e0dd273006cac2e1e29f773dbfe8b3bf62d4eba1f92ae7d2d66cd8fe18125eb_1280.jpg"
          imageAlt="Hotel reception desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Estonia Grand Hotel"
          copyrightText="© 2025 Estonia Grand Hotel. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "about" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" },
                { label: "Event Spaces", href: "events" },
                { label: "Airport Transfer", href: "transfer" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "Tallinn City Center", href: "location" },
                { label: "Attractions Nearby", href: "attractions" },
                { label: "Directions", href: "directions" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "+372 123 4567", href: "tel:+3721234567" },
                { label: "info@estoniagrand.ee", href: "mailto:info@estoniagrand.ee" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/estoniagrandhotel", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com/estoniagrandhotel", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com/estoniagrandhotel", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}