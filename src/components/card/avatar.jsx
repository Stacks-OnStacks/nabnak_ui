import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { nabnakClient } from "../../common/remote/nabnak-client";

export default function Avatar(props) {
    const [url, setUrl] = useState();
    const id = props.id;
    useEffect(() => {
        nabnakClient.get(`/member/${id}`).then((e) => {
            setUrl(e.data.avatar);
        });
    }, [id]);

    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={id}>
                    <img id="user_icon" src={url} width="25" height="25" />
                </Tooltip>
            </Box>
        </>
    );
}
