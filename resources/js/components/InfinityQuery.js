
import { Box } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import InfinityContent from "./InfinityContent";


const client = new QueryClient();

function InfinityQuery() {


    return (
        <div>
            <QueryClientProvider client={client}>
            <InfinityContent />
                </QueryClientProvider>



        </div>
    );
}

export default InfinityQuery;

if (document.getElementById("app")) {
    ReactDOM.render(<InfinityQuery />, document.getElementById("app"));
}
