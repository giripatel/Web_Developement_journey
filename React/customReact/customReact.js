
// Example of how React works under the hood
const customElement = (reactElement,container)=>{
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children'){
            continue;
        }
        element.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(element);
}

const container = document.getElementById('root');
const reactElement = {
    type: 'a',
    props:{
        href : 'http://google.com',
        target : '_blank'
    },
    children: "Click me to visit Google"
}

customElement(reactElement,container);
