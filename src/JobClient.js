module.exports = class JobClient {

    constructor(axios) {
      axios.defaults.baseURL = 'https://jsearch.p.rapidapi.com/search';
      this.axios = axios;
    }
    async getLatestJobs(queryInput='') {
      try {
        const options = {
          method: 'GET',
          url: 'https://jsearch.p.rapidapi.com/search',
          params: {
            query: queryInput,
            page: '1',
            num_pages: '1'
          },
          headers: {
            'X-RapidAPI-Key': 'b21a2b4931msh66f8edf5b0e63e3p1834e9jsn82a7fad2b842',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          }
        };
        const response = await this.axios.request(options);
        return response.data?.data || [];
      } catch(e) {
        console.log(`Error while getting jobs ${e.message}`, e);
        return [];
      }    
    }
  }