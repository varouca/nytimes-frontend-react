import { titleizeString } from "../helpers/stringHelpers";

const Book = (props) => {
  return (
    <div className="col" key={props.book.list_name_encoded}>
      <div className="card">
        <div className="position-relative">
          <span className="position-absolute rank">{props.book["rank"]}</span>
          <img
            src={`https://covers.openlibrary.org/b/isbn/${props.book["book_details"][0]["primary_isbn10"]}-M.jpg`}
            className="card-img-top img-fluid"
            style={{ objectFit: "cover", height: "400px" }}
            alt="Card"
          />
        </div>

        <div className="card-body">
          <div className="card-title">
            <h5 className="book-title">
              {titleizeString(props.book["book_details"][0]["title"])}
            </h5>

            <span className="author">
              by {props.book["book_details"][0]["author"]}
            </span>
          </div>

          <p className="card-text">
            {props.book["book_details"][0]["description"]}
          </p>
          <a
            href={props.book["amazon_product_url"]}
            className="btn btn-primary"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
