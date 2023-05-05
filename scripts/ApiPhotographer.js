export default class ApiPhotographer {
    async getData() {
        let URL = 'data/photographers.json';
        let response = await fetch(URL);
        let data = await response.json();

        const dataPhotographers = [...data.photographers];
    

        return {
            'photographers': dataPhotographers,
        
        };
    }
}