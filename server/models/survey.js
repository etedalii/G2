'use strict'

class Options {
    constructor(name = ""){
        //this._id = _id;
        this.name = name;
    }
}

class Line {
    constructor(option = new Options()){
        this.Options  = option;
    }

    toString() {
        return "{" + this.Options.toString() + "}";
    }
}

class Category {
    constructor(lines = [], questionCount = 0, questionOrder = 0){
        this.lines = lines;
        this.questionCount = questionCount;
        this.questionOrder = questionOrder;
    }

    toString() {
        let outputstring = "";
        let count = 0;

        for( let line of this.lines){
            outputstring += "{" + this.lines.toString();
            count++
            outputstring += (count > this.lines.length) ? "}, \n" : "} \n";
        }
        outputstring += ", questionCount: "+ this.questionCount + "\n";
        outputstring += ", questionOrder: " + this.questionOrder;
        return outputstring;
    }

    addLine (line) {
        this.lines.push(line);
        this.questionOrder += 1;
    }

    empty() {
        this.lines = [];
        this.questionCount = 0;
        this.questionOrder = 0;
    }
}

module.exports.Category = Category;
module.exports.Line = Line;
module.exports.Options = Options;