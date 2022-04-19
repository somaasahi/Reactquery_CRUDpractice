import { Box } from "@mui/system";


function InfinityList(props) {


  return (

    <Box sx={{height: 20, maxWidth: 350}}>
        <li>No.{props.post.id} :{props.post.content}</li>
    </Box>

  );
}

export default InfinityList;

