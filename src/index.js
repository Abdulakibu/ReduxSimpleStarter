import React from  'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyACR2i677rp5SRE-eJ3McetCjFPO_k8uy0';

// Create a new component. This component should produce some HTMl
const App = () => {
    return (
    <div>Hello World
        <SearchBar/>
    </div>
    );
}

// Take this component HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));