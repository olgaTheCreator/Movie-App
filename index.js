const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd5d2604e',
            s: 'avengers'
        }
    });
    
    console.log(response.data);
};

fetchData();