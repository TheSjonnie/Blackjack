export function search(endpoint) {
    return {
        input: "",
        items: [],
        endpoint: endpoint,
        fetch() {
            if (this.input.trim() === "") {
                this.items = [];
                return;
            }

            fetch(`${this.endpoint}?query=${encodeURIComponent(this.input)}`)
                .then((res) => res.json())
                .then((data) => (this.items = data))
                .catch(() => (this.items = []));
        },
    };
}
