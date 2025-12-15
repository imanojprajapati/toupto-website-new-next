"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Event background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Toupto Technologies in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how leading organizations use our EAP Solutions to transform their event management
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
            {!isPlaying ? (
              <>
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1280&q=80"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110 shadow-2xl group"
                    aria-label="Play video"
                  >
                    <Play className="w-10 h-10 text-gray-900 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-white text-lg font-semibold mb-1">
                    EAP Solutions Overview
                  </p>
                  <p className="text-white/80 text-sm">
                    2:34 - See how our platform transforms event management
                  </p>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/T2XtZyE3-Dw?autoplay=1"
                title="Toupto Technologies Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-gray-300">Events Managed</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">2M+</div>
            <div className="text-gray-300">Attendees Served</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

