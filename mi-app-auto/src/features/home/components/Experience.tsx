import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Experience.css'

export default function Experience() {
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
    <section className="experience">
      <div className="container experience__grid">
        <div className="experience__media">
          <video
            ref={videoRef}
            className="experience__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/suv.jpg"
            aria-hidden="true"
          >
            <source
              src="https://videos.pexels.com/video-files/35666229/15114734_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="experience__content">
          <p className="eyebrow">Explore con calma</p>
          <h2>Su próximo camino empieza aquí</h2>

          <p>
            Compare modelos, guarde sus favoritos y solicite información desde
            la ficha de cada auto.
          </p>

          <ul className="check-list">
            <li>Catálogo fácil de explorar</li>
            <li>Características claras</li>
            <li>Contacto desde cada ficha</li>
          </ul>

          <Link className="text-link experience__link" to="/contact">
            Consultar un modelo →
          </Link>
        </div>
      </div>
    </section>
  )
}
