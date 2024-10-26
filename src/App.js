// App.js
import React from 'react';
import Toque from './Toque';
import './App.css'; // Estilos globais

function App() {
    return (
        <div className="App">
            {/* Cabeçalho com nome e logo da universidade */}
            <header className="App-header">
                <div className="university-info">
                    
                    <img 
                        src="/unir-logo.png" 
                        alt="Logo da Universidade Federal de Rondônia" 
                        className="university-logo" 
                    />
                </div>
            </header>

            {/* Conteúdo principal */}
            <main className="content">
                <Toque />
            </main>
        </div>
    );
}

export default App;
