import $ from "jquery";
import Component from "./Component";

type OtamatoneLabels = { [position in number]: string };
type OtamatoneAudios = { [position in number]: string };

export interface OtamatoneConfiguration {
  /**
   * Map a position in the otamatone a string label
   */
  labels?: OtamatoneLabels;

  /**
   * Map a position in the otamatone to a audio file
   */
  audios?: OtamatoneAudios;

  /**
   * Called when a position is played
   */
  onPlay?: (position: number) => any;
}

class OtamatoneComponent extends Component<OtamatoneConfiguration> {
  protected attach(
    root: JQuery<HTMLElement>,
    config: OtamatoneConfiguration
  ): void {
    console.log("attach");
  }

  protected override update(
    root: JQuery<HTMLElement>,
    config: OtamatoneConfiguration
  ): void {
    console.log("update");
  }
}

export default Component.createFunctionalAPI(OtamatoneComponent);
