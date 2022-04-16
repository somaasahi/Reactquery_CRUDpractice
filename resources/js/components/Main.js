import React from "react";
import ReactDOM from "react-dom";
import BOX from "@mui/material/Box";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./Example";
import Navigation from "./Navigation";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Infinity from "./Infinity";

const client = new QueryClient();

function Main() {
    return (
        <BOX>
            <QueryClientProvider client={client}>
                <BrowserRouter>
                    <Navigation />

                    <main className={"m-5"}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/react" element={<Example />} />
                            <Route path="/infinity" element={<Infinity />} />
                        </Routes>
                    </main>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>

        </BOX>
    );
}

export default Main;
ReactDOM.render(<Main />, document.getElementById("app"));
