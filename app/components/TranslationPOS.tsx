"use client"
import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

// Define the structure for POS tag (word and its tag)
interface PosTag {
    0: string;  // The word
    1: string;  // The POS tag
}

const TranslationPOS: React.FC = () => {
    const [translationText, setTranslationText] = useState<string>('');
    const [posTags, setPosTags] = useState<PosTag[]>([]);

    // Handle text change
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTranslationText(e.target.value);
    };

    // Handle the submission and fetch POS tags
    const handleSubmit = async () => {
        try {
            const response = await axios.post<{ pos_tags: PosTag[] }>('http://localhost:5000/submit_translation', {
                translation_text: translationText
            });
            setPosTags(response.data.pos_tags);
        } catch (error) {
            console.error('Error submitting translation:', error);
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Submit Translation for POS Tagging</h2>
            <textarea
                rows={4}
                cols={50}
                value={translationText}
                onChange={handleTextChange}
                placeholder="Enter translation text here"
            />
            <br />
            <button onClick={handleSubmit} style={{ margin: '20px' }}>
                Submit Translation
            </button>

            {posTags.length > 0 && (
                <div>
                    <h3>POS Tags</h3>
                    <ul>
                        {posTags.map((tag, index) => (
                            <li key={index}>
                                <strong>{tag[0]}</strong>: {tag[1]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TranslationPOS;
