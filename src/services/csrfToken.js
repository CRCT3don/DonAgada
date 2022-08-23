import axios from "axios";

    
    export const csrfToken = async () => {
        
        
        let csrfTokenSet = ''
        
        const foreignUrl = 'https://event-reservation-system.herokuapp.com';
        

        const encodedUrl = btoa(unescape(encodeURIComponent(foreignUrl)))
        const scraperUrl = 'https://laravel-csrf-scrapper.herokuapp.com/csrf_scraper.php';


        // let result = axios.get(scraperUrl + '?url=' + encodedUrl)
        // console.log(result.data)
        // result.data = csrfTokeSet
        
      const  csrf = {
        method: "GET",
        // url: "https://uselessfacts.jsph.pl/random.json",
        url: scraperUrl + '?url=' + encodedUrl,
        params: { language: "en" },
        headers:{ 'Content-Type': 'application/json', 'Accept': 'application/json'}
      };
      await axios
        .request(csrf)
        .then((response) => {
          console.log(response.data.token)
          response.data.token = csrfTokenSet
        })
        .catch((error) => {
          console.log(error);
          // errorMsg.message = error.message;
    // alert(errorMsg.message)
        });
    }

// export default csrfToken()
