import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

describe('Check new results display', () => {
    test('renders new result', () => {
        render(<App />);
        screen.debug();
    })
})