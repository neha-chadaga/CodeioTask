import React from "react";

var d = new Date();
var y = d.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {y}</p>
    </footer>
  );
}

export default Footer;