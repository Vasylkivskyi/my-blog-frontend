import React from "react";
import "./post.scss";
import { deslugify } from "../../Utils/RoutesHelper";
import { MatchIncludedInterface } from "../../interfaces/interfaces";
import Info from "../info/Info";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Post: React.FC<MatchIncludedInterface> = ({ match }) => {
  const { params } = match;
  const { post } = params;

  return (
    <div className="post">
      <Helmet>
        <title>{deslugify(post)}</title>
      </Helmet>
      <h1>{deslugify(post)}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic sequi
        quidem. Sapiente rem accusamus ad modi aperiam in ipsum, animi, unde
        porro beatae quas iusto mollitia inventore quo nisi cum! Sint
        perspiciatis delectus deserunt aspernatur inventore recusandae sunt,
        vitae atque nisi cum ea quisquam explicabo quos exercitationem fugiat
        nobis saepe, possimus impedit veniam. Laborum odio consectetur
        reprehenderit blanditiis nostrum Lorem ipsum dolor sit.
      </p>
      <p>
        Dolor sit amet consectetur adipisicing elit. Dolor hic sequi quidem.
        Sapiente rem accusamus ad modi aperiam in ipsum, animi, unde porro
        beatae quas iusto mollitia inventore quo nisi cum! Sint perspiciatis
        delectus deserunt aspernatur inventore recusandae sunt, vitae atque nisi
        cum ea quisquam explicabo quos exercitationem fugiat nobis saepe,
        possimus impedit veniam. Laborum odio consectetur reprehenderit
        blanditiis nostrum Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempora ullam illum rem aliquam error ratione? Hic magni earum
        temporibus nesciunt.
      </p>
      <p>
        Modi aperiam in ipsum, animi, unde porro beatae quas iusto mollitia
        inventore quo nisi cum! Sint perspiciatis delec
      </p>
      <p>
        Mollitia inventore quo nisi cum! Sint perspiciatis delectus deserunt
        aspernatur inventore recusandae sunt, vitae atque nisi cum ea quisquam
        explicabo quos exercitationem fugiat nobis saepe, possimus impedit
        veniam. Laborum odio consectetur reprehenderit blanditiis nostrum Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Magni dolor modi
        facilis quasi molestias! Cum similique amet saepe eveniet quas quisquam
        aspernatur odit libero dignissimos nulla id debitis animi magni commodi
        quis nesciunt quasi, modi maiores eaque vel laboriosam vero? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nam totam nesciunt et culpa
        explicabo tenetur praesentium voluptatibus repellat quas cumque, laborum
        iusto beatae illo vero harum fugiat neque porro deserunt. Deleniti
        voluptas non inventore? Qui velit nobis doloribus eos fugiat. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae
        officia adipisci voluptatum quam? Repellendus doloremque ullam deserunt
        provident nobis? Cum harum eligendi repellat voluptatum adipisci ullam
        odit perspiciatis architecto accusamus rem nihil delectus modi sequi
        dolorem nulla laudantium, neque cumque. Sunt magnam corporis dignissimos
        beatae at accusamus dolores laboriosam doloremque voluptatem? Et saepe
        neque perspiciatis molestias. Delectus est doloribus ex quis sunt, id
        excepturi cum corporis quibusdam quia repudiandae nostrum ratione
        aspernatur consequuntur odio provident quasi accusamus. Aperiam,
        repellendus. Fugiat, minus, deserunt quisquam consequatur est distinctio
        debitis placeat repellendus delectus sed voluptate ullam itaque aliquam
        quis quidem. Adipisci, accusamus.
      </p>
      <div className="links">
        <Link to="/">
          <div className="link-item">← Previous article</div>
        </Link>
        <Link to="/">
          <div className="link-item">Next article →</div>
        </Link>
      </div>
      <Info />
    </div>
  );
};

export default Post;
