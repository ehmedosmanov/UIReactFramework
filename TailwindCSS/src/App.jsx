import React from "react";
import "./main.scss";
import { CiSun, CiDark } from "react-icons/ci";
import useDarkMode from "./hooks/useDarkMode";
import { Helmet } from 'react-helmet-async';
function App() {
  const {theme,changeThemeMode} = useDarkMode();

  return (
    <>
    <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <h1>Title</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, itaque
          tempore! Ad illo omnis sit, quas totam amet rem minus vel iusto
          perspiciatis nam assumenda commodi autem expedita voluptate quia eius
          atque! Vero sint aliquam numquam voluptatum optio dolorum nulla modi
          laudantium facilis. Ratione error accusantium commodi esse dolorum
          pariatur consequatur soluta adipisci earum. Voluptates molestiae,
          earum iure vero consequatur nobis quia nisi repudiandae, quaerat modi,
          alias ullam. Consequatur molestias magni quia cumque sint, iusto
          totam, delectus dolorum ad expedita, maiores eaque consequuntur rerum
          ipsa distinctio enim odit dolores quae facere culpa obcaecati qui
          maxime. Fugit consequatur necessitatibus qui porro veritatis eligendi
          eos, eveniet beatae reiciendis ut vel atque officia. Deleniti,
          suscipit sapiente quidem aperiam illum nam quam explicabo voluptatum
          ipsa corporis sit, facere illo architecto possimus, ipsum eius quia
          quibusdam ducimus nihil excepturi. Voluptas, quidem soluta quo
          voluptates dolores natus at hic quod esse vel! Maxime incidunt
          corporis ipsa consequuntur reiciendis provident ullam cum omnis
          fugiat, veniam, iusto dolores explicabo. Culpa atque error soluta
          explicabo doloremque quis, veniam, rem tempore eum qui iure delectus
          aut eveniet, sit provident voluptatibus alias dolores saepe? Eos est
          qui itaque impedit vitae! Eligendi excepturi modi perspiciatis neque
          quaerat quis exercitationem quia numquam quibusdam obcaecati esse
          dolore non sapiente explicabo est fugit ex sint quo iusto, quod
          voluptatibus nesciunt ad magni cupiditate! Iure perspiciatis expedita
          unde natus. Dolores doloremque velit beatae repellendus perferendis
          aperiam. Dicta, nostrum? Blanditiis aliquam dignissimos iusto
          perspiciatis illo neque, atque animi placeat exercitationem ab.
          Repellendus odit cupiditate repudiandae ea magni ex nisi enim
          architecto, voluptatum nam, ipsa inventore dolor velit illum eaque ut
          incidunt quod delectus. Dolor possimus, repudiandae, quo unde quaerat,
          deleniti architecto qui totam ipsum nihil recusandae saepe cum
          nesciunt! Soluta eligendi inventore quasi delectus odio, ducimus aut
          beatae fugiat explicabo nisi pariatur placeat ex harum excepturi
          minima qui provident deleniti maiores a dicta eveniet deserunt
          voluptatum quidem. Libero fugit nemo praesentium consectetur autem nam
          dolorum non ex voluptas rerum adipisci minus similique vero maiores,
          tempora animi dolor officia aliquid? Laudantium voluptas recusandae
          non id porro. Aspernatur, perferendis pariatur unde repellat
          exercitationem quaerat.
        </p>
      </div>
      <button
        className="toggle text-[55px] border border-spacing-5"
        onClick={changeThemeMode}
      >
        {theme ? <CiSun /> : <CiDark />}
      </button>
    </>
  );
}

export default App;
