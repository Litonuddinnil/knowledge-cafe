import PropTypes from "prop-types"

const BookMark = ({bookmark}) => {
    const {title} =bookmark;
  return (
    <div className=" bg-slate-200 p-4 m-4 rounded-lg ">
      <h1 className="text-2xl">{title}</h1>
    </div>
  )
}
BookMark.propTypes ={
    bookmark: PropTypes.object
   
}
export default BookMark