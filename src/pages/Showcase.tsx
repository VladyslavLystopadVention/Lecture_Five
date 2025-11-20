import { Select } from "../components/Controlled/Select";
import { Textarea } from "../components/Controlled/Textarea";
import { FileInput } from "../components/Uncontrolled/FileInput";
import { Canvas } from "../components/Uncontrolled/Canvas";
import { Toggler } from "../RxJS/local/Toggler";
import { TogglerDependant } from "../RxJS/local/TogglerDependant";
import { AddChatButton } from "../RxJS/components/ChatButton";
import { CurrentChats } from "../RxJS/components/CurrentChats";
import { StockTicker } from "../RxJS/components/StockTicker";
import { GrandParent } from "../RxJS/components/Grandparent";

export const Showcase = () => {

    return (
        <>
            <section>
                <div>

                    <h1>Uncontrolled & controlled components</h1>

                    <Select />

                    <div style={{ height: 10 }}></div>

                    <Textarea />

                    <div style={{ height: 10 }}></div>

                    <FileInput />

                    <Canvas />

                </div>
            </section>

            <section>

                <h1>RxJS showcase </h1>

                <Toggler />
                <TogglerDependant />

                <div style={{ height: 10 }}></div>
                <CurrentChats />
                <AddChatButton />

                <div style={{ height: 10 }}></div>
                <StockTicker />

                <div style={{ height: 10 }}></div>
                <GrandParent />
                
            </section>
        </>
    )
}