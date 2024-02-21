import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/clsvrl0sj0x4m07w3xcista93/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
