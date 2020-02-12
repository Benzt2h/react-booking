import axios from 'axios';

export const tableFetchs = () => {
    return dispatch => {
        axios.get("http://localhost:3001/tableList/").then(
            res => {
                dispatch({ type: "tables_fetch", payload: res.data })
            }
        )
    }
}

export const tableFetch = id => {
    return dispatch => {
        axios.get("http://localhost:3001/tableList/" + id).then(
            res => {
                dispatch({ type: "table_fetch", payload: res.data })
            }
        )
    }
}

export const tableUpdate = (id, values) => {
    if (values['status'] == false) {
        values['status'] = true
        delete values["c-name"]
        values["name"] = ""
    }
    else values['status'] = false
    return dispatch => {
        axios.put("http://localhost:3001/tableList/" + id, values).then(
            res => {
                console.log(values)
                dispatch({ type: "table_update" })
            }
        )
    }
}