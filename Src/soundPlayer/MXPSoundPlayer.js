// MIT License
// 
// Copyright (c) 2021 MXPSQL
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


class MXPSoundPlayer{

    // sound object
    #sound = document.createElement("audio");

    // constructor
    constructor(object, callback){
        this.#sound.src = object.src || null;
        this.#sound.muted = object.muted || false;
        this.#sound.volume = object.volume || 1;
        this.#sound.setAttribute("preload", "auto");
        this.#sound.setAttribute("controls", "none");
        this.#sound.style.display = "none";
        document.body.appendChild(this.#sound);


        if(callback){
            callback(this.#sound);
        }
    }

    // sound source
    setSrc = (src) => {
        this.#sound.src = src;
        return true;
    }

    getSrc = () => {
        return this.#sound.src;
    }

    // volume
    setMuted = (yes) => {
        this.#sound.muted = yes;
        return true;
    }

    getMuted = () => {
        return this.#sound.muted;
    }


    setVolume = (vol) => {
        this.#sound.volume = vol;
        return true;
    }


    getVolume = () => {
        return this.#sound.volume;
    }

    // player controller
    play = () => {
        this.#sound.play();
        return true;
    }

    pause = () => {
        this.#sound.pause();
        return true;
    }

    stop = () => {
        this.#sound.pause();
        this.#sound.currentTime = 0;
    }

    // full control here, if needed
    getAudio = () => {
        return this.#sound;
    }
}