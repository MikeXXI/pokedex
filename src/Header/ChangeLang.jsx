import React from "react";
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';

function ChangeLang({ selectLang }) {
    return (
        <div>
            <Select
                sx={{
                    width: 75,
                    height: 50,
                    margin: 'auto',
                    position: 'center',
                    marginLeft: 10,
                }}>
                <MenuItem onClick={() => selectLang("fr")}>fr</MenuItem>
                <MenuItem onClick={() => selectLang("en")}>en</MenuItem>
                <MenuItem onClick={() => selectLang("es")}>es</MenuItem>
                <MenuItem onClick={() => selectLang("it")}>it</MenuItem>
                <MenuItem onClick={() => selectLang("de")}>de</MenuItem>
                <MenuItem onClick={() => selectLang("ja")}>ja</MenuItem>
                <MenuItem onClick={() => selectLang("zh-Hant")}>zh</MenuItem>
                <MenuItem onClick={() => selectLang("roomaji")}>ro</MenuItem>
                <MenuItem onClick={() => selectLang("ko")}>ko</MenuItem>
            </Select>
        </div>
    );
}

export default ChangeLang;