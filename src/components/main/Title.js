import React from 'react';

export const Title = (props) => {
  return (
    <section className="topTitle">
      <div id = "top">TELEOS</div>
      <img src={require("../../media/logo.png")} id = "logo_img"/>
    </section>

  );
}