namespace TSE {
    export var gl: WebGLRenderingContext;
    export class GLUtilities {
        public static initialize(elementId?: string): HTMLCanvasElement {
            let canvas: HTMLCanvasElement;

            if (elementId) {
                canvas = document.getElementById(elementId) as HTMLCanvasElement;
                if (canvas === undefined) {
                    throw new Error("canvas not found with elemenId :" + elementId)
                }
            } else {
                canvas = document.getElementById("canvas") as HTMLCanvasElement;
            }
            gl = canvas.getContext("webgl");
            if (gl === undefined) {
                throw new Error("unable to initialize webgl");
            }
            return canvas;
        }
    }
}
