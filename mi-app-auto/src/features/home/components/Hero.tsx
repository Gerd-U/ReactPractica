import { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import './Hero.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!video) {
      return
    }

    const updatePlayback = () => {
      if (reducedMotion.matches) {
        video.pause()
      } else {
        void video.play().catch(() => {
          // Keep the poster image visible if autoplay is blocked.
        })
      }
    }

    updatePlayback()
    reducedMotion.addEventListener('change', updatePlayback)

    return () => reducedMotion.removeEventListener('change', updatePlayback)
  }, [])

  return (
    <section className="home-hero">
      <video
        ref={videoRef}
        className="home-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/sport.jpg"
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/14052063/14052063-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container home-hero__content">
        <p className="eyebrow">Gerald Motors · Costa Rica</p>
 
        <h1>El auto que mueve sus planes</h1>
 
        <p>
          Una colección de vehículos para explorar a su ritmo, comparar
          características y elegir su favorito.
        </p>
 
        <div className="home-hero__actions">
          <Link className="button button--light" to="/cars">Explorar autos</Link>
 
          <Link className="button button--outline" to="/contact">Hablar con un asesor</Link>
        </div>
      </div>
    </section>
  )
}
