"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider
      theme={{
        styleVariant: 'futuristicAndOutOfBox',
        colorTemplate: 2,
        textAnimation: 'slide',
      }}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: 'hero', id: 'hero' },
            { name: 'about', id: 'about' },
            { name: 'how-to-buy', id: 'how-to-buy' },
            { name: 'tokenomics', id: 'tokenomics' },
            { name: 'footer', id: 'footer' },
          ]}
          logoSrc="/images/logo.svg"
          buttonText="Get Early Access"
          onButtonClick={() => console.log('Button Clicked')}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Aurora"
          subtitle="Your future is here."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
          onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={[
            "We provide innovative solutions for every sector.",
            "Experience the future of technology with us.",
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Our Tokenomics"
          description="Key statistics regarding our token distribution and usage"
          kpiItems={[
            { value: "100M", description: "Total Supply" },
            { value: "70M", description: "Circulating Supply" },
            { value: "30M", description: "Reserved for Development" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: "Quick Links", items: [
              { label: "Home", onClick: () => console.log('Home clicked') },
              { label: "About", onClick: () => console.log('About clicked') }
            ]},
            { title: "Legal", items: [
              { label: "Privacy Policy", onClick: () => console.log('Privacy clicked') }
            ]},
            { title: "Contact", items: [] }
          ]}
          copyrightText="© 2023 Aurora. All rights reserved."
          onPrivacyClick={() => console.log('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}