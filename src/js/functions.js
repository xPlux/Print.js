export function addWrapper (htmlData, params) {
  return '<div style="width:100%;">' + htmlData + '</div>'
}

export function capitalizePrint (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
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
