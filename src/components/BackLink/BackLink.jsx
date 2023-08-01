import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./Back.scss";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
    scale: 1.2;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to} className="back">
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object,
  children: PropTypes.node,
};
