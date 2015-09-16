"use strict";

var Wdgt1 = React.createClass({
    displayName: "Wdgt1",

    render: function render() {
        return React.createElement(
            "div",
            { id: "wdgt1" },
            React.createElement(
                "div",
                { id: "flowWrap" },
                React.createElement("div", { className: "flow bottom", id: "linebottom" }),
                React.createElement("img", { className: "flow bottom", id: "flagbottom", src: "img/flagbottom.png" }),
                React.createElement("img", { className: "flow bottom", id: "txtbottom", src: "img/txtbottom.png" }),
                React.createElement("div", { className: "flow", id: "dotbottom" }),
                React.createElement("div", { className: "flow top", id: "linetop" }),
                React.createElement("img", { className: "flow top", id: "flagtop", src: "img/flagtop.png" }),
                React.createElement("img", { className: "flow top", id: "txttop", src: "img/txttop.png" }),
                React.createElement("div", { className: "flow", id: "dottop" })
            ),
            React.createElement("img", { className: "bottom", id: "right", src: "img/right.png" }),
            React.createElement("img", { className: "bottom", id: "txtright", src: "img/txtright.png" }),
            React.createElement("div", { id: "watertop" }),
            React.createElement("img", { id: "icesmall", src: "img/icesmall.png" }),
            React.createElement("img", { className: "flow", id: "icebig", src: "img/icebig.png" })
        );
    }
});
components.wdgt1 = React.createElement(Wdgt1, null);
var Empty = React.createClass({
    displayName: "Empty",

    render: function render() {
        return null;
    }
});

components.emp = React.createElement(Empty, null);

