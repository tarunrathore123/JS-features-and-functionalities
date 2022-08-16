import { WaveSurfer } from "wavesurfer-react";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";
import CursorPlugin from "wavesurfer.js/dist/plugin/wavesurfer.cursor.min";
// import MyCustomPlugin from "my-custom-plugin-path";

// https://www.youtube.com/watch?v=ftjZI4mLCoI

const plugins = [
  {
    plugin: RegionsPlugin,
    options: { dragSelection: true },
  },
  {
    plugin: TimelinePlugin,
    options: {
      container: "#timeline",
    },
  },
  {
    plugin: CursorPlugin,
  },
  {
    // plugin: MyCustomPlugin,
    options: {
      someGreatOption: "someGreatValue",
    },
    creator: "myCustomCreate",
  },
];

export default function SongWithSoundWave() {
  return (
    <div>
      <WaveSurfer plugins={plugins} />
    </div>
  );
}
