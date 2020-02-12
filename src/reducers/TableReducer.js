export default function (state = [], action) {
    switch (action.type) {
        case "tables_fetch":
            return action.payload;
        case "table_fetch":
            return action.payload;
        case "table_update":
            return { ...state, saved: true, msg: "ทำรายการสำเร็จ" }
        default:
            return state;
    }
}

