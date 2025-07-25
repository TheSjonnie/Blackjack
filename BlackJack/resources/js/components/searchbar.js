export function search(endpoint,allUsers) {
    return {
        input: "",
        items: [],
        endpoint: endpoint,
        fetch() {
            if (this.input.trim() === "") {
                console.log(allUsers)
                this.items = allUsers;
                return;
            }

            fetch(`${this.endpoint}?query=${encodeURIComponent(this.input)}`)
                .then((res) => res.json())
                .then((data) => (this.items = data))
                .catch(() => (this.items = []));
        },
    };
}
