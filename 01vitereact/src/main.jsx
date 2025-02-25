import {createRoot} from 'react-dom/client' 
import App from './App.jsx'
import React from 'react';
function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}
const anotherUser = "Chai aur react"
const anotherElement = (
    <a href = "http://google.com" target = '_blank'>Visit google</a>
)
const reactElement = React.createElement(
    'a',
    {href: 'http://google.com' , target:'_blank'},
    'Click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    reactElement
)
