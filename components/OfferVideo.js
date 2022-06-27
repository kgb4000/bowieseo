import { useState } from 'react'
import dynamic from 'next/dynamic'

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false })

const OfferVideo = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="video-section">
      <>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="YQ9VpQQWtEw"
          onClose={() => setOpen(false)}
          autoplay
        />
      </>
      <img
        src="/images/free-mini-seo-audit.jpg"
        alt="Watch video to get a free mini seo audit"
        loading="lazy"
        onClick={() => setOpen(true)}
        className="video-btn"
      />
    </div>
  )
}

export default OfferVideo
