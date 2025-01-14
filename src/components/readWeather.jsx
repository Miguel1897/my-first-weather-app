import { Box, Typography } from "@mui/material";

function ReadWeather({weather}){
    return(
        <Box sx={{
            mt: 2,
            display: "grid",
            gap: 2,
            textAlign: "center",
        }}>
            <Typography variant="h4" component="h2">
                {weather.city}, {weather.country}
            </Typography>
        
        <Box component="img" alt={weather.condictionText} src={weather.icon} sx={{margin: "0 auto"}}/>
           <Typography variant="h5" component="h3">
            {weather.temperature} °C
            </Typography>
            <Typography variant="h6" component="h4">
            {weather.condictionText}
            </Typography>
        </Box>
        );
}

export default ReadWeather;