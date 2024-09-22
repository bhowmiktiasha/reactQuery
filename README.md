This is a example usage of ReactQuery with GraphQL. I have used Github Api to fetch the public repositories on search.Please refer the image below

<img width="676" alt="Screenshot 2024-09-22 at 4 43 46 PM" src="https://github.com/user-attachments/assets/13b86435-2a65-4af1-995c-b0dfb3b57958">

**General IDEA**

How React Query Helps with GraphQL:
When combined with GraphQL, React Query can greatly enhance the developer experience by managing the complexity of data fetching, caching, and synchronization, especially for dynamic GraphQL queries.


Benefits of Using React Query with GraphQL:
Data Fetching & Caching: React Query handles the entire process of fetching GraphQL data, caching it, and ensuring that your app doesn't fetch the same data repeatedly. This improves performance and reduces server load.

Error and Loading State Management: It simplifies handling loading, error, and success states. React Query automatically tracks the status of GraphQL queries and mutations, reducing the boilerplate code you'd otherwise need.

Background Fetching & Refetching: React Query allows background fetching and automatic refetching of GraphQL data when it becomes stale. This keeps your data fresh without manual intervention.

Apollo Client is a GraphQL client that allows you to easily interact with a GraphQL API from a front-end application (like a React app). It simplifies sending queries and mutations to a GraphQL server, handling the data response, caching results, and managing local state.

**Before Running the code please replace github token with your own in ApolloClient.js file.**
Cheers!!
