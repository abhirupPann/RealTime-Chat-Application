import {atom} from "recoil";

export const selectedConvoState = atom({
    key: "selectedConvoState",
    default: {}
});

export const messagesState = atom({
    key: "messagesState",
    default: []
});

export const isSelectedState =  atom({
    key: "isSelected",
    default: true
});