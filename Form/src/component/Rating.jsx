import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import "./rating.css";

const labels = {
  0.5: <SentimentVeryDissatisfiedIcon color="error" />,
  1: <SentimentVeryDissatisfiedIcon color="error" />,
  1.5: <SentimentVeryDissatisfiedIcon color="error" />,
  2: <SentimentDissatisfiedIcon color="error" />,
  2.5: <SentimentDissatisfiedIcon color="error" />,
  3: <SentimentSatisfiedIcon color="warning" />,
  3.5: <SentimentSatisfiedIcon color="warning" />,
  4: <SentimentSatisfiedAltIcon color="success" />,
  4.5: <SentimentSatisfiedAltIcon color="success" />,
  5: <SentimentVerySatisfiedIcon color="success" />,
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  console.log("value", value);
  console.log("hover", hover);

  return (
    <>
      {" "}
      <div>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {/* {value !== null && (
                        <div className="rating-container">
                            <Box sx={{ ml: 2, marginLeft: "2px" }}>
                                {labels[hover !== -1 ? hover : value]}
                            </Box>
                            <p className="value-text">{value}</p>
                        </div>
                    )} */}
        </Box>
        {/* {value === null ? null : (
                    <div> 
                        {value >= 0 && value <= 2.5 && (
                            <Typography className="text-low">
                                Will Change It!!!
                            </Typography>
                        )}
                        {value >= 3 && value <= 3.5 && (
                            <Typography className="text-average">
                                Will Improve!!!
                            </Typography>
                        )}

                        {value >= 4 && value <= 5 && (
                            <Typography className="text-better">
                                Thank You!!!
                            </Typography>
                        )}
                    </div>
                )} */}
      </div>
    </>
  );
}
