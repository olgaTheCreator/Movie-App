const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd5d2604e',
            s: searchTerm
        }
    });
    
    console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;
const onInput = e => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout (() => {
        fetchData(e.target.value);
    }, 500);
}
input.addEventListener('input',onInput);
