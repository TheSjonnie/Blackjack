export function search(endpoint, allData, searchProperty) {
    return {
        input: "",
        items: [],
        allData: allData,
        endpoint: endpoint,
        fetch() {
            if (this.input.trim() === "") {
                this.items = allData;
                return;
            }
            this.items = this.allData.filter(item => 
                item.searchProperty.toLowerCase().includes(this.input.toLowerCase()))
            
                // deze functie werkt maar gaat via een de controller en via een database query kan weer gebruikt worden als nodig
            // fetch(`${this.endpoint}?input=${encodeURIComponent(this.input)}`)
            //     .then((res) => res.json())
            //     .then((data) => (this.items = data))
            //     .catch(() => (this.items = []));
        },
    };
}
