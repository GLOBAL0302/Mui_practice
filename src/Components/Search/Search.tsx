import {TextField} from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
        variant="standard"
        fullWidth
        label="search"
        type='search'
        value={value}
        onChange={onChange} />;
};

export default Search;