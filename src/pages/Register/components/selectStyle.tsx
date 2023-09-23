import { GroupBase, StylesConfig } from "react-select";

const selectStyle: StylesConfig<unknown, false, GroupBase<unknown>> | undefined = {
    container: (base) => ({
        ...base,
        background: "#e9e9e911",
        border: "1px solid #fff",
        padding: "0.3rem",
        borderRadius: "5px"
    }),
    control: (base) => ({
        ...base,
        background: "none",
        border: "none",
        boxShadow:"none"
    }),
    placeholder: (base) => ({
        ...base,
        color: "rgba(255, 255, 255, 0.5)",
        whiteSpace:"nowrap"
    }),
    indicatorSeparator: () => ({})
}

export default selectStyle