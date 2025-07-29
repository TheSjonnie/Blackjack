export function search(endpoint, allData, searchProperty) {
    return {
        input: "",
        items: [],
        allData: allData,
        pagination: "",
        endpoint: endpoint,
        fetch() {
            if (this.input.trim() === "") {
                console.log(allData)
                this.items = allData.data;
                // this.pagination = allData
                console.log(this.pagination)
                return;
            }
            // console.log(this.items)
            // this.items = this.allData.filter(item => 
            //     item.searchProperty.toLowerCase().includes(this.input.toLowerCase()))
            //     console.log(this.items.count())
                
                // deze functie werkt maar gaat via een de controller en via een database query kan weer gebruikt worden als nodig
                // console.log(`${this.endpoint}?input=${encodeURIComponent(this.input)}`)
            fetch(`${this.endpoint}?input=${encodeURIComponent(this.input)}&Path=${encodeURIComponent(window.location.pathname)}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    this.items = data.items
                    this.pagination = data.pagination
                })
                .catch((err) => (console.error(err)));
        },
    };
}
