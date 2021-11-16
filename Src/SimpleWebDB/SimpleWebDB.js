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

class SimpleWebDBCollection{
    #kvp = {};
    set = (key, value) => {
        this.#kvp[key] = value;
    };
    get = (key) => {
        return this.#kvp[key];
    };
    rem = (key) => {
        delete this.#kvp[key];
    };
    list = (key) => {
        var arr = {};
        arr.key = [];
        arr.value = {};
        arr.maparray = {};

        for (const entry of Object.entries(this.#kvp)) {
            arr.maparray[entry[0]] = entry;
            arr.key.push(arr.maparray[entry[0]][0]);
            arr.value[entry[0]] = arr.maparray[entry[0]][1];
        }

        return arr;
    };
    dump = () => {
        return this.#kvp;
    };
}

var lobk = {};
var lobkey = [];

class SimpleWebDBEngine{
    #collection = {};
    set = (key) => {
        this.#collection[key] = new SimpleWebDBCollection();
        return this.#collection[key];
    };
    get = (key) => {
        return this.#collection[key];
    };
    rem = (key) => {
        delete this.#collection[key];
    };
    list =() => {
        var arr = {};
        arr.key = [];
        arr.value = {};
        arr.maparray = {};

        for(const entry of Object.entries(this.#collection)){
            arr.maparray[entry[0]] = entry;
            arr.key.push(arr.maparray[entry[0]][0]);
            arr.value[arr.maparray[entry[0]][0]] = arr.maparray[entry[0]][1];
        }

        return arr;
    };
    collectionDump = () => {
        return this.#collection;  
    };
    dump = () => {
        var dobj = {};
        var collList = this.list().key;
        for(var i = 0; i < collList.length; i++){
            dobj[collList[i]] = {};

            var kvp = this.#collection[collList[i]].list().key;

            for(var i2 = 0; i2 < kvp.length; i2++){
                dobj[collList[i]][kvp[i2]] = this.get(collList[i]).get(kvp[i2]);
            }
        }

        return dobj;
    };
    load = (lobj) => {
        var lobjkeys = [];
        lobk = lobj;
        var lobjentry = Object.entries(lobj);
        for(var i = 0; i < lobjentry.length; i++){
            lobjkeys.push(lobjentry[i]);
        }

        lobkey = lobjkeys;

        for(var i = 0; i < lobjkeys.length; i++){
            var a = this.set(lobjkeys[i][0]);


            for(const e of Object.keys(lobj)){
                a.set(e, lobj[e]);
            }
        }
    };
    constructor(cobj){
        cobj = (typeof cobj !== 'undefined') ?  cobj : {};
        this.load(cobj);
    }
}

const SimpleWebDB = {
    load: (lobbj) => {return new SimpleWebDBEngine(lobbj);}
};