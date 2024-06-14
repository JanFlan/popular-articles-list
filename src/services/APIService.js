const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/';

const APIService = {
    /**
     * Fetches most popular articles from the NY times API
     * @returns {Promise<Array>} A Promise that resolves with the fetched items or rejects with an error
     */
    fetchMostPopularArticles: async (period = 1) => {
        const apiKey = process.env.REACT_APP_NY_TIMES_API_KEY;
        const url = `${BASE_URL}${period}.json?api-key=${apiKey}`;

        if (!apiKey) {
            throw new Error('API key is not defined');
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
};

export default APIService;
