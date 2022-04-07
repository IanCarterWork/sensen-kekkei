import SensenPluginModal from "sensen-plugin-modal";
import SensenWireframe from "sensen-wireframe";
import { FontIcon } from "./components/fonticon";
import { PostReaderComponent } from "./components/post-reader";
export default function INITIALIZE_COMPONENTS() {
    FontIcon.$using();
    SensenWireframe.$using();
    SensenPluginModal.$use();
    PostReaderComponent.$using();
}
