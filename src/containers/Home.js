import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestMovies, fetchMovies } from "./../actions/movies";
import { requestUsers } from "../actions/users";
import Home from "../views/Home";

const mapStateToProps = ({ movies, users }) => ({movies, users});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestMovies,
  requestUsers,
  fetchMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);