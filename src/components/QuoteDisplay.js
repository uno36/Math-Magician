import React, { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [quoteColor, setQuoteColor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'OVLxk+Voch6j4YYIHHj6lw==x27QWQ9Kuf6JLlY5',
          },
        });

        const generateRandomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        const data = await response.json();
        setQuote(data[0].quote);
        setQuote(data[0].quote);
        setQuoteColor(generateRandomColor());
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <p className='Loading'>Loading...</p>;
  }

  if (error) {
    return <p className='error'>{error}</p>;
  }

  return <p className='quote' style={{ color: quoteColor }}>{quote}</p>;
};

React.Children = 1;

export default QuoteDisplay;
