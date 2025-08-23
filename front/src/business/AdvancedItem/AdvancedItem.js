import { Code } from "./Code";
import { Download } from "./Download";
import { Image } from "./Image";
import { Json } from "./Json";

export const AdvancedItem = (item) => {

    if (!item) {
        return null;
    }

    const { type, ...rest } = item;

    switch(type) {

        default: {

            return <div>HHHHHHHHH</div>;
        }

        case "text": {
            break;
        }

        case "json": {

            return <Json {...rest} />;
        }

        case "code": {

            return <Code {...rest} />;
        }

        case "image": {

            return <Image {...rest} />;
        }

        case "link": {

            return <Download {...rest} />;
        }
    }
};