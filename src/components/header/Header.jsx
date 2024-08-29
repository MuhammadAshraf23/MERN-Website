import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Header = () => {
  const StyledHeader = styled(AppBar)
  `
    background: #fff;
    height: 55px;
  
  `;
  const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
  `;

  const SubHeading = styled(Typography)
  `
    font-size: 10px;
    font-style: itallic;
  `;

  return (
    <StyledHeader>
      <Toolbar style={{minHeight:55}}>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
        <Search />
        <CustomButtons />
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
