import {Lerp, VEC4} from "@perforizon/math";

// takes an input of [0 to 1] and maps it to [red-yellow-green-cyan-blue-magenta-red]
export const GradToHue = (grad: number): VEC4 => {
    grad = grad % 1;
    // gradient interval: [0/6, 1/6)
    // color interval: [red, yellow)
    if (grad < 1 / 6) {
      const redChannel = 1.0;
      const greenChannel = Lerp(0, 1.0, grad * 6);
      const blueChannel = 0;
      return [redChannel, greenChannel, blueChannel, 1.0];
    }
    // interval: [1/6, 2/6)
    // color interval: [yellow, green)
    else if (grad < 2 / 6) {
      const redChannel = Lerp(1.0, 0, (grad - 1 / 6) * 6);
      const greenChannel = 1.0;
      const blueChannel = 0;
      return [redChannel, greenChannel, blueChannel, 1.0];
    }
    // interval: [2/6, 3/6)
    // color interval: [green, cyan)
    else if (grad < 3 / 6) {
      const redChannel = 0;
      const greenChannel = 1.0;
      const blueChannel = Lerp(0, 1.0, (grad - 2 / 6) * 6);
      return [redChannel, greenChannel, blueChannel, 1.0];
    }
    // interval: [3/6, 4/6)
    // color interval: [cyan, blue)
    else if (grad < 4 / 6) {
      const redChannel = 0;
      const greenChannel = Lerp(1.0, 0, (grad - 3 / 6) * 6);
      const blueChannel = 1.0;
      return [redChannel, greenChannel, blueChannel, 1.0];
    }
    // interval: [4/6, 5/6)
    // color interval: [blue, magenta)
    else if (grad < 5 / 6) {
      const redChannel = Lerp(0, 1.0, (grad - 4 / 6) * 6);
      const greenChannel = 0;
      const blueChannel = 1.0;
      return [redChannel, greenChannel, blueChannel, 1.0];
    }
    // note that unlike the previous intervals this one includes it's upper bound
    // interval: [5/6, 6/6]
    // color interval: [magenta, red]
    else if (grad <= 6 / 6) {
      const redChannel = 1.0;
      const greenChannel = 0;
      const blueChannel = Lerp(1.0, 0, (grad - 5 / 6) * 6);
      return [redChannel, greenChannel, blueChannel, 1.0];
    }
    return [0, 0, 0, 1.0];
  };
  