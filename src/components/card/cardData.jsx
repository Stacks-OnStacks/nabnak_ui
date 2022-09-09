import { Card, CardActions, CardContent, Chip, Grid, Rating, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { nabnakClient } from "../../common/remote/nabnak-client";
import AddCardToPool from "../dashboard/addCardToPool";
import Avatar from "./avatar";
import { cardContext } from "./cards";
import DeleteCard from "./deleteCard";

export default function CardTableData() {
    const [cards] = useContext(cardContext);
    const email = useSelector((state) => state.loginSlice.email);
    const cardArray = cards.map((o) => {
        return (
            <Grid item md={3}>
                <Card sx={{ maxWidth: 275, display: "flex", minHeight: 325 }} variant="outlined">
                    <CardContent>
                        <Typography textAlign="right" variant="h5" width="100%">
                            <Avatar id={o.memberEmail}></Avatar>
                        </Typography>
                        <Typography variant="h5">Description</Typography>
                        <hr></hr>

                        <Typography paragraph> {o.description}</Typography>
                        <hr></hr>

                        <Typography component="legend">Points</Typography>
                        <Rating name="read-only" value={o.points} readOnly />
                        <br></br>
                        <Chip variant="outlined" label={`Tech: ${o.tech}`}></Chip>

                        <Chip variant="outlined" label={`Status: ${o.status}`}></Chip>

                        <CardActions>
                            <AddCardToPool card={{ description: o.description, points: o.points, tech: o.tech, status: o.status }} />
                            {email === o.memberEmail && <DeleteCard id={o.cardId} />}
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        );
    });

    return cardArray;
}
