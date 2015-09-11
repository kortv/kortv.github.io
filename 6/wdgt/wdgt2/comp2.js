"use strict";

var Wdgt2 = React.createClass({
    displayName: "Wdgt2",

    render: function render() {
        return React.createElement(
            "div",
            { id: "wdgt2" },
            React.createElement(
                "div",
                { id: "wrap" },
                React.createElement("img", { id: "finger", src: "wdgt/34/img/finger.png" }),
                React.createElement("div", { id: "sleeve" })
            ),
            React.createElement("div", { className: "loader" }),
            React.createElement("div", { className: "loader" }),
            React.createElement("div", { className: "loader" }),
            React.createElement("div", { className: "loader" }),
            React.createElement("img", { className: "cHouse", id: "c", src: "wdgt/34/img/c.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt" },
                "ПРЕДПРИЯТИЕ"
            ),
            React.createElement("img", { className: "st", id: "st", src: "wdgt/34/img/st.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt-1" },
                "отгрузка товара"
            ),
            React.createElement("img", { className: "cHouse", id: "c-1", src: "wdgt/34/img/c-1.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt-2" },
                "МАГАЗИН"
            ),
            React.createElement("img", { className: "st", id: "st-1", src: "wdgt/34/img/st-1.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt-3" },
                "оплата товара"
            ),
            React.createElement("img", { className: "cHouse", id: "c-2", src: "wdgt/34/img/c-2.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt-4" },
                React.createElement(
                    "strong",
                    null,
                    "БАНК"
                )
            ),
            React.createElement("img", { className: "st", id: "st-2", src: "wdgt/34/img/st-2.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt-5" },
                "до 90% денег",
                React.createElement("br", null),
                "за товар"
            ),
            React.createElement(
                "div",
                { className: "txt", id: "txt-6" },
                "(сразу после",
                React.createElement("br", null),
                "отгрузки",
                React.createElement("br", null),
                "в магазин)"
            ),
            React.createElement("img", { className: "st", id: "st-3", src: "wdgt/34/img/st-3.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt-7" },
                "остальные",
                React.createElement("br", null),
                "деньги"
            ),
            React.createElement(
                "div",
                { className: "txt", id: "txt-8" },
                "после оплаты",
                React.createElement("br", null),
                "магазином",
                React.createElement("br", null),
                "(0-120 дней)"
            ),
            React.createElement("img", { className: "circle", id: "circle", src: "wdgt/34/img/circle.png" }),
            React.createElement(
                "div",
                { className: "txt", id: "txt-9" },
                "увеличение",
                React.createElement("br", null),
                "оборота"
            )
        );
    }
});
components.wdgt2 = React.createElement(Wdgt2, null);

