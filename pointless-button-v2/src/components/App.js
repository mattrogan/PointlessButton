import React from 'react';
import Footer from './footer/Footer';

const useState = React.useState

function App() {
    function increment() {
        setNumClicks(function (prev) {
            return prev + 1
        })
    }

    const [numClicks, setNumClicks] = useState(0);

    return (
        <div className="gameplay">
            <p className="counter">You have clicked {numClicks} times.</p>
            <p>Click at your own risk...</p>
            <br />
            <button className="button" type="button" onClick={increment}>Click me?</button>
            <Footer />
        </div>
    )
}

export default App;