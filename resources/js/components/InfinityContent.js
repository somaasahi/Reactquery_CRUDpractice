import { Box } from "@mui/system";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import { useStateIfMounted } from "use-state-if-mounted";
import InfinityList from "./InfinityList";


function InfinityContent(props) {

    const [hasMore, setHasMore] = useStateIfMounted(true);

  const fetchPosts = async ({ pageParam = 1 }) => {

    const { data } = await axios.get("api/getInfinity/", {
        params: {
            page: pageParam
    }}
    );
    if (data.length < 1) {
        setHasMore(false);
        console.log('dead');
        return;
    }

    return { data, nextPage: pageParam + 1, totalPages: 30 };
  };

  const {
    data,
    isError,
    isLoading,
    fetchNextPage
  } = useInfiniteQuery("inifinity", fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    }
  });

  return (

    <Box sx={{ width: "50%", height: 700, maxWidth: 360, bgcolor: "white", overflow: 'auto' }}>
    <div>InfinityQuery with ReactQuery</div>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>There was an error</p>
        ) : (
          <InfiniteScroll
          hasMore={hasMore}
          loadMore={fetchNextPage}
          useWindow={false}>
            {data.pages.map((page) =>
              page.data.map((post) => <InfinityList key={post.id} post={post} />)
            )}
          </InfiniteScroll>
        )}
      </Box>

  );
}

export default InfinityContent;

