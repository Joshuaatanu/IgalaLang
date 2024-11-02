import React from 'react';
import FileUpload from '../components/FileUpload';
import './App.css';
import SyntheticDataGenerator from '../components/SyntheticDataGenerator';
import TranslationPOS from '../components/TranslationPOS';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>POS Tagging Application</h1>
            </header>
            <FileUpload />
            <div>
                <SyntheticDataGenerator />
            </div>
            <div>
                <TranslationPOS />
            </div>
        </div>
    );
}

export default App;
