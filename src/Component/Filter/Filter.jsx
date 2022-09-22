import PropTypes from 'prop-types';

const Filter = ({ filterInput }) => {
    return (<div>
        <h3>Find contact by name</h3>
        <input onChange={(e)=>filterInput(e)} type="text" name="" id="" />
    </div> );
}
 
export default Filter;

Filter.propTypes = {
    filterInput: PropTypes.func.isRequired
}
