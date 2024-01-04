import Breadcrumb from "@/components/common/Breadcrumb";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import BlockchainCTA from "@/components/home_2/BlockchainCTA";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Empire Duels - Dridatah Technology Pvt Ltd",
  openGraph: {
    title: "Empire Duels - Dridatah Technology Pvt Ltd",
    description:
      "Dridatah partners with ambitious startups to transform your innovative ideas into reality through custom-built software solutions. Don't let your brilliant concepts stay on the whiteboard.",
    url: "https://dridatah.com",
    siteName: "Dridatah",
    images: [
      {
        url: "https://dridatah.com/assets/images/og-meta-image.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function ProjectDetails() {
  return (
    <>
      <Header layout={1} select_color="light" social_menu_color="light" />
      <Breadcrumb
        title={`Empire Duels: Building a Play-to-Earn Empire Across Blockchains`}
        page={`Project Empire Duels Case Study`}
      />
      <OffCanvasBox />
      <MobileMenu />
      <section className="project-details ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feature-image mb-5">
                <Image
                  src="/assets/images/projects/EmpireDuels-1922b.png"
                  alt="not found"
                  className="img-fluid rounded-4"
                  width={1921}
                  height={976}
                />
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="project-details-content">
                <h5 className="mb-4">Challenge</h5>
                <p className="mb-40">
                  Forge a captivating, 2D play-to-earn blockchain game where
                  players build empires across platforms and chains, wielding
                  NFTs and a real-time in-game exchange.
                </p>
                <h5 className="mb-4">Solution</h5>
                <p>
                  Dridatah Technology masterfully wielded tech and creativity to
                  craft Empire Duels:
                </p>
                <p>
                  <strong>Unity Engine:</strong> Built the core game engine,
                  bringing pixelated empires to life on web and Android.
                </p>
                <p>
                  <strong>React & NestJS:</strong> Powered a robust backend
                  infrastructure for handling blockchain interactions, resource
                  management, and market dynamics.
                </p>
                <p>
                  <strong>Wax & Solana Plugins:</strong> Forged custom plugins
                  facilitating seamless integration of both popular blockchains
                  within Unity.
                </p>
                <p>
                  <strong>Cross-Chain Bridge:</strong> Constructed a secure
                  bridge enabling players to transfer resources and
                  cryptocurrencies between Wax and Solana chains.
                </p>
                <p>
                  <strong>NFT Integration:</strong> Crafted a system where
                  players collect and utilise NFTs as tools for resource
                  production and empire growth.
                </p>
                <p>
                  <strong>Real-time In-game Exchange:</strong> Built a dynamic
                  marketplace where players buy, sell, and trade resources,
                  driving the game's economy.
                </p>
                <p className="mb-40">
                  <strong>2D Art:</strong> Hand-painted charming pixel art
                  environments, characters, and animations for an immersive
                  gameplay experience.
                </p>

                <h5 className="mb-4">Results</h5>
                <p>
                  Empire Duels stands as a beacon of Dridatah's blockchain game
                  development expertise:
                </p>
                <p>
                  <strong>Play-to-Earn Prowess:</strong> Players wield resources
                  and NFTs to forge their own economic destinies, driving
                  engagement and value.
                </p>
                <p>
                  <strong>Cross-Chain Conquest:</strong> Conquer across two
                  blockchains, maximising player options and expanding the
                  game's reach.
                </p>
                <p>
                  <strong>NFT-Powered Gameplay:</strong> NFTs become more than
                  collectibles, serving as essential tools and status symbols
                  within the game.
                </p>
                <p>
                  <strong>Thriving In-game Economy:</strong> The real-time
                  exchange empowers players, fostering player interaction and
                  economic dynamism.
                </p>
                <p className="mb-40">
                  <strong>Pixelated Perfection:</strong> Charming 2D art
                  breathes life into the world, immersing players in the empires
                  they build.
                </p>

                <h5 className="mb-4">Technologies Used</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Unity Engine
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    React
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    NestJS
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Wax
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Solana
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Photoshop
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    After Effects
                  </li>
                </ul>

                <div className="d-flex align-items-center gap-4 mb-40">
                  <div className="feature-image">
                    <Image
                      src="/assets/images/projects/ed_611.png"
                      alt="feature image"
                      className="img-fluid rounded-4"
                      width={611}
                      height={526}
                    />
                  </div>
                  <div className="feature-image">
                    <Image
                      src="/assets/images/projects/ed_611-1.png"
                      alt="feature image"
                      className="img-fluid rounded-4"
                      width={611}
                      height={526}
                    />
                  </div>
                </div>

                <h5 className="mb-4">Conclusion</h5>
                <p className="mb-40">
                  Empire Duels is a testament to Dridatah's ability to deliver
                  innovative and engaging play-to-earn blockchain gaming
                  experiences. By harnessing cutting-edge tech and artistic
                  talent, Dridatah empowers clients to conquer the ever-evolving
                  world of blockchain gaming.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="pd-sidebar">
                <div className="info-sidebar-widget">
                  <h6 className="mb-4">Project Information</h6>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fas fa-user"></i>
                    </span>
                    <div>
                      <span>Clients</span>
                      <h6 className="mb-0 mt-1 fs-18">Empire Duels</h6>
                    </div>
                  </div>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-layer-group"></i>
                    </span>
                    <div>
                      <span>Industry</span>
                      <h6 className="mb-0 mt-1 fs-18">Blockchain Game</h6>
                    </div>
                  </div>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <div>
                      <span>Project Duration</span>
                      <h6 className="mb-0 mt-1 fs-18">30 Days</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlockchainCTA />
        </div>
      </section>
      <FooterTwo />
    </>
  );
}
