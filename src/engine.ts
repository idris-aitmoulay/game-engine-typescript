namespace TSE {
    export  class Engine {
        private _count: number = 0;
        private _canvas: HTMLCanvasElement;
        public constructor(){
        }

        public start(): void {
            // @ts-ignore
            this._canvas = GLUtilities.initialize();
            // @ts-ignore
            gl.clearColor(1,0,0,1);
            this.loop()
        }

        public loop(): void {
            this._count++;
            document.title = this._count.toString();
            requestAnimationFrame(this.loop.bind(this));
        }
    }
}
