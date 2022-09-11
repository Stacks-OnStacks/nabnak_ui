import { Card, CardActions, CardContent, Chip, Grid, Rating, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Avatar from "../card/avatar";
import AddCardToPool from "./addCardToPool";
import DeleteCardFromPool from "./deleteCardFromPool";

export default function CardPoolData(props) {
    const email = useSelector((state) => state.loginSlice.email);

    const cardArray = props.cards.map((o, i) => {
        return (
            <Grid item md={3}>
                <Card sx={{ minWidth: 300, maxWidth: 400, display: "flex", minHeight: 325 }} variant="outlined">
                    <CardContent>
                        <Typography textAlign="right" variant="h5" width="100%">
                            <Avatar id={email}></Avatar>
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

                        <CardActions textAlign="right">
                            <DeleteCardFromPool id={i} />
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        );
    });

    return cardArray;
}
