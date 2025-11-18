import { Select } from "../components/Controlled/Select";
import { Textarea } from "../components/Controlled/Textarea";

export const Showcase = () => {

    return (
        <section>
            <div>

                <Select />

                <div style={{ height: 10 }}></div>

                <Textarea />

            </div>
        </section>
    )
}