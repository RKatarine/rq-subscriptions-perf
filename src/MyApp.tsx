import * as React from "react";
import { MyRQComponent } from "./MyRQComponent";

export const MyApp = () => {
    const [render, toggle] = React.useReducer((x) => !x, false);
    return (
        <div className="App">
            <button onClick={toggle}>toggle</button>
            {render &&
                Array(100)
                    .fill(null)
                    .map((_, i) => {
                        return <MyRQComponent key={`${i}`} id={`${i}`} />;
                    })}
        </div>
    );
};
