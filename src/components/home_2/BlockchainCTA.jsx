"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

export default function BlockchainCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    // setIsOpen(true);
  };

  const closeModal = () => {
    // setIsOpen(false);
  };

  return (
    <section className="hm2-video-section pb-100 pt-100">
      <div className="container">
        <div className="hm2-video-box d-flex align-items-center justify-content-between theme-shadow position-relative z-1 overflow-hidden gap-5 flex-wrap">
          <Image
            src="/assets/images/shapes/curve-shape.png"
            alt="curve shape"
            className="position-absolute curve-shape z--1"
            width={216}
            height={344}
          />
          <div className="content-left d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
            <button
              className="video-popup-btn ripple-effect"
              onClick={openModal}
            >
              <i className="fas fa-play"></i>
            </button>
            <div>
              <h3 className="mb-2">Build a blockchain game?</h3>
              <p className="mb-0 lead">
                Partner with Dridatah Technology and forge your path to success.
              </p>
            </div>
          </div>
          <Link href="/contact" className="template-btn primary-btn">
            Make an Appointment
          </Link>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="6WZOxnYi4Cs"
        onClose={closeModal}
      />
    </section>
  );
}
