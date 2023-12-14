
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if (prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://tejasagrawall.netlify.app',
        target: '_blank',
    },
    childern:'Click To visit Tejas Portfolio'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);