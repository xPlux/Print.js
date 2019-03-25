import Modal from './modal'
import Browser from './browser'

export function addWrapper (htmlData) {
  return '<div style="width:100%;">' + htmlData + '</div>'
}

export function capitalizePrint (obj) {
  return obj.charAt(0).toUpperCase() + obj.slice(1)
}

export function addHeader (printElement, header, headerStyle) {
  // Create header element
  let headerElement = document.createElement('h1')

  // Create header text node
  let headerNode = document.createTextNode(header)

  // Build and style
  headerElement.appendChild(headerNode)
  headerElement.setAttribute('style', headerStyle)

  printElement.insertBefore(headerElement, printElement.childNodes[0])
}

export function cleanUp (params) {
  // If we are showing a feedback message to user, remove it
  if (params.showModal) Modal.close()

  // Check for a finished loading hook function
  if (params.onLoadingEnd) params.onLoadingEnd()

  // If preloading pdf files, clean blob url
  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable)

  // If a onPrintDialogClose callback is given, execute it
  if (params.onPrintDialogClose) {
    let event = 'mouseover'

    if (Browser.isChrome() || Browser.isFirefox()) {
      // Ps.: Firefox will require an extra click in the document to fire the focus event.
      event = 'focus'
    }
    const handler = () => {
      // Make sure the event only happens once.
      window.removeEventListener(event, handler)

      params.onPrintDialogClose()
    }

    window.addEventListener(event, handler)
  }
}
