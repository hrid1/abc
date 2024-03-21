function customRender(reactElement, container){
   /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.porps.href)
    domElement.setAttribute('target', reactElement.porps.target)

    container.appendChild(domElement)
    */
}


const reactElement = {
    type: 'a',
    porps: {
        href: 'https://google.com', 
        target: '_blank'
    },
    children: "Click me to visite Google"
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
