<template>
    <div>
        <p>RAW PAGE</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'test-vue',

    async mounted() {
                    const foreignUrl = 'https://event-reservation-system.herokuapp.com';


      const encodedUrl = btoa(unescape(encodeURIComponent(foreignUrl)))
      const scraperUrl = 'https://laravel-csrf-scrapper.herokuapp.com/csrf_scraper.php';
    

      scraperUrl + '?url=' + encodedUrl
    //   console.log(result.data)

        let result = axios.get(scraperUrl + '?url=' + encodedUrl)
        console.log(result.data)
        // result.data = csrfTokeSet

    //   const  facts = {
    //     method: "GET",
    //     // url: "https://uselessfacts.jsph.pl/random.json",
    //     url: scraperUrl + '?url=' + encodedUrl,
    //     params: { language: "en" },
    //     headers:{ 'Content-Type': 'application/json', 'Accept': 'application/json'}
    //   };
    //   await axios
    //     .request(facts)
    //     .then((response) => {
    //       console.log(response.data)
    //     //   myFacts.name = response.data.text;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       // errorMsg.message = error.message;
    // // alert(errorMsg.message)
    //     });
    }
}
</script>

<style>
</style>