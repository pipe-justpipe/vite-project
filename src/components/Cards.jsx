import PropTypes from 'prop-types'; // ES6

const Cards = ({ description, position, company, name, image }) => {
  return (
    <div className="w-fit border-2 bg-white border-[#b5838d] text-xl flex items-center flex-col gap-5">
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p className="bg-[#b5838d] p-3 rounded-full ">Image</p>
        <div>
        {name}
        {description}
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}
export default Cards;
