console.log('hello')

module.export {
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  
client
.query({
  query: gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `
})
.then(result => console.log(result));
}