import { useEffect, useState, useRef } from 'react'
import { Html5Qrcode } from 'html5-qrcode'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getTrajet, getTrajetById } from '../../api/endpoints/trajet'

export default function QRCodeScanner({ onResult }) {

  // Mettre à jour le dernier résultat et l'afficher clairement
      const {data, isLoading} = useQuery({
        queryKey:["trajet"],
        queryFn:()=>getTrajet()
      })
      
  const [trajet, setTrajet] = useState(null)
  const navgate = useNavigate()
  const [showValidation, setShowValidation] = useState(false)
  const [error, setError] = useState('')
  const [isScanning, setIsScanning] = useState(true)
  const [lastResult, setLastResult] = useState(null)
  const scannerRef = useRef(null)
  const isRunningRef = useRef(false)

  const handleScanSuccess = async (decodedText) => {
    try {
      // Arrêter temporairement le scanner
      if (scannerRef.current && isRunningRef.current) {
        await scannerRef.current.stop()
        isRunningRef.current = false
        setIsScanning(false)
      }

      setShowValidation(decodedText && true)
      setLastResult(decodedText)
      // Appeler la fonction de callback
      onResult(decodedText)

    } catch (err) {
      console.error("Erreur lors du traitement du scan:", err)
      setError("Erreur lors du traitement du résultat")
    }
  }

  // Fonction pour redémarrer le scanner
  const restartScanner = async () => {
    try {
      if (scannerRef.current && !isRunningRef.current) {
        await scannerRef.current.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: 250
          },
          (decodedText) => handleScanSuccess(decodedText),
          () => {
            // Ignorer les erreurs de scan en cours
          }
        )
        isRunningRef.current = true
        setIsScanning(true)
        setLastResult(null)
      }
    } catch (err) {
      setError("Erreur lors du redémarrage du scanner")
      console.error(err)
    }
  }

  useEffect(() => {
    let mounted = true

    const startScanner = async () => {
      try {
        if (!scannerRef.current) {
          scannerRef.current = new Html5Qrcode("qr-reader")
        }

        if (!isRunningRef.current) {
          await scannerRef.current.start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: 250
            },
            (decodedText) => {
              if (mounted) {
                handleScanSuccess(decodedText)
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
  }, [])

  return (
    <>
    
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

          {!isScanning && lastResult && (
            <div className="mt-4 text-center">
              <p className="text-green-600 font-semibold mb-2">
                Code scanné avec succès !
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-700 break-all">
                  {lastResult}
                </p>
                
              </div>
              <button
                onClick={restartScanner}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Scanner un autre code
              </button>
            </div>
          )}

          {isScanning && (
            <p className="text-sm text-gray-500 mt-4 text-center">
              Pointez votre caméra vers un QR code
            </p>
          )}
        </div>
      </div>
      {
        !isLoading && <Modal isOpen={showValidation} ticketInfo={data.trajets.find(trajet=>trajet._id === lastResult)}  />
      }
      
    </>
  )
}



const Modal = ({ isOpen, onClose, onValidate, ticketInfo }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl">
        <h3 className="text-xl font-bold mb-4">Validation du trajet</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Gare de départ:</p>
            <p className="font-semibold">{ticketInfo?.gareDepart.nom}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Gare d'arrivée:</p>
            <p className="font-semibold">{ticketInfo?.gareArrivee.nom}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Prix:</p>
            <p className="font-semibold">€</p>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Annuler
          </button>
          <button
            onClick={onValidate}
            className="flex-1 px-4 py-2 bg-[#5D5FEF] text-white rounded-lg hover:bg-[#4e50df]"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};