import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Header = () => {
  const StyledHeader = styled(AppBar)
  `
    background: #2874f0;
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
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar style={{minHeight:55}}>
        <Component>
          <img src={logoURL} alt="" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore{" "}
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>{" "}
            </SubHeading>
            <img
              src={subURL}
              alt=""
              style={{ width: 10, height: 10, marginLeft: "2px" }}
            />
          </Box>
        </Component>
        <Search />
        <CustomButtons />
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
