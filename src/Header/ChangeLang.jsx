import React from "react";
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';



function ChangeLang({ lang, setLang }) {    
        function onChange(e) {
          setLang(e.target.value)
          console.log(e.target.value)
        }    
    return (
                <Select value={lang} onChange={onChange} onBlur={onChange}>
                    <MenuItem value="fr">fr</MenuItem>
                    <MenuItem value="en">en</MenuItem>
                    <MenuItem value="es">es</MenuItem>
                    <MenuItem value="it">it</MenuItem>
                    <MenuItem value="de">de</MenuItem>
                    <MenuItem value="ja">ja</MenuItem>
                    <MenuItem value="zh-Hant">zh</MenuItem>
                    <MenuItem value="roomaji">ro</MenuItem>
                    <MenuItem value="ko">ko</MenuItem>
                </Select>
    );
}

export default ChangeLang;