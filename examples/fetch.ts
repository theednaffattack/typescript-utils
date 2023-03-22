import { asyncWrapper } from "../src/async-wrapper";

// const sampleFetch = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

async function runFetchExample() {
    const [fetchErr, fetchData] = await asyncWrapper(
        fetch,
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    const [jsonErr, jsonData] = await asyncWrapper(() => {
        if (fetchData) {
            return fetchData.json();
        } else {
            return new Promise((resolve, reject) => reject("you blew it"));
        }
    });

    console.log("FETCH EXAMPLE", { fetchErr, fetchData, jsonErr, jsonData });
}

runFetchExample()
    .then(() => {
        console.log("Fetch example has been run");
    })
    .catch((fetchErr) => {
        console.error(fetchErr);
    });
