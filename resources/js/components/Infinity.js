import { Box } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from "react-infinite-scroller";
import { useStateIfMounted } from "use-state-if-mounted";

function Infinity() {

    const [list, setList] = useStateIfMounted([]);
    const [hasMore, setHasMore] = useStateIfMounted(true);

    const loadMore = async (page) => {
        const response = await fetch(
            `http://localhost:8888/api/getInfinity?page=${page}`
        );

        const data = await response.json();

        if (data.length < 1) {
            setHasMore(false);
            console.log('dead');
            return;
        }

        setList([...list, ...data]);

    };

    //各スクロール要素
    const items = (
        <ul>
            {list.map((value) => (
                <li key={value.id}>No.{value.id} : {value.content}</li>
            ))}
        </ul>
    );

    //全体のスタイル

    //ロード中に表示する項目
    const loader = (
        <div className="loader" key={0}>
            Loading ...
        </div>
    );

    return (
        <Box sx={{ width: "50%", height: 400, maxWidth: 360, bgcolor: "white", overflow: 'auto' }}>
            <div>InfinityQuery without ReactQuery</div>
            <InfiniteScroll
                loadMore={loadMore} //項目を読み込む際に処理するコールバック関数
                hasMore={hasMore} //読み込みを行うかどうかの判定
                loader={loader}
                useWindow={false}
            >
                {/* 読み込み最中に表示する項目 */}
                {items} {/* 無限スクロールで表示する項目 */}
            </InfiniteScroll>
        </Box>
    );
}

export default Infinity;

if (document.getElementById("app")) {
    ReactDOM.render(<Infinity />, document.getElementById("app"));
}
