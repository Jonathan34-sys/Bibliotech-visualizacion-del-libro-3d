import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

function importAll(r) {
    return r.keys()
        .sort() // muy importante para que estén ordenadas
        .map(r);
}

function App() {
    const pages = importAll(require.context('./Pages/libro1', false, /\.jpg$/));

    return (
        <div className="App">
            <h1>BIBLIOTECH (Cuentos que cuidan)</h1>
            <HTMLFlipBook width={400} height={600}>
                {pages.map((src, index) => (
                    <div key={index} className="page">
                        <img src={src} alt={`Página ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}

export default App;
