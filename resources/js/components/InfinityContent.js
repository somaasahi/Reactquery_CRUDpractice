import { Box } from "@mui/system";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";


function InfinityContent() {
  const fetchPosts = async ({ pageParam = 1 }) => {
      console.log(pageParam);
    const response = await fetch(
      `http://localhost:8888/api/getInfinity?page=${pageParam}`
    );
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 300 };
  };

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery("posts", fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    }
  });

  return (

    <Box sx={{ width: "50%", height: 400, maxWidth: 360, bgcolor: "white", overflow: 'auto' }}>
    <div>InfinityQuery with ReactQuery</div>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>There was an error</p>
        ) : (
          <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
            {data.pages.map((page) =>
              page.results.map((post) => <li key={post.id}>No.{post.id} :{post.content}</li>)
            )}
          </InfiniteScroll>
        )}
      </Box>

  );
}

export default InfinityContent;

