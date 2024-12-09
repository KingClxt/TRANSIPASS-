import { useEffect, useState, useRef } from 'react'
import { Html5Qrcode } from 'html5-qrcode'

export default function QRCodeScanner({ onResult }) {
  const [error, setError] = useState('')
  const scannerRef = useRef(null)
  const isRunningRef = useRef(false)

  useEffect(() => {
    let mounted = true

    const startScanner = async () => {
      try {
        // Créer une nouvelle instance seulement si elle n'existe pas
        if (!scannerRef.current) {
          scannerRef.current = new Html5Qrcode("qr-reader")
        }

        // Démarrer le scanner seulement s'il n'est pas déjà en cours d'exécution
        if (!isRunningRef.current) {
          await scannerRef.current.start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: 250
            },
            (decodedText) => {
              if (mounted) {
                onResult(decodedText)
              }
            },
            () => {
              // Ignorer les erreurs de scan en cours
            }
          )
          isRunningRef.current = true
        }
      } catch (err) {
        if (mounted) {
          setError(err.message)
          console.error("Erreur du scanner:", err)
        }
      }
    }

    startScanner()

    // Nettoyage
    return () => {
      mounted = false
      const cleanup = async () => {
        if (scannerRef.current && isRunningRef.current) {
          try {
            await scannerRef.current.stop()
            isRunningRef.current = false
          } catch (err) {
            console.error("Erreur lors de l'arrêt du scanner:", err)
          } finally {
            scannerRef.current = null
          }
        }
      }
      cleanup()
    }
  }, [onResult])

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          Scanner QR Code
        </h2>
        
        <div 
          id="qr-reader" 
          className="w-full h-full relative rounded-lg overflow-hidden"
        />

        <p className="text-sm text-gray-500 mt-4 text-center">
          Pointez votre caméra vers un QR code
        </p>
      </div>
    </div>
  )
}