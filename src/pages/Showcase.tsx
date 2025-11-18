import { Select } from "../components/Controlled/Select";
import { Textarea } from "../components/Controlled/Textarea";
import { FileInput } from "../components/Uncontrolled/FileInput";
import { Canvas } from "../components/Uncontrolled/Canvas";

export const Showcase = () => {

    return (
        <section>
            <div>

                <Select />

                <div style={{ height: 10 }}></div>

                <Textarea />

                <div style={{ height: 10 }}></div>

                <FileInput />

                <Canvas />

            </div>
        </section>
    )
}