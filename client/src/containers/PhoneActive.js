import { connect } from 'react-redux'
import { deleteContact, resendContact } from '../actions'
import Phone from '../components/Phone'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteContact(ownProps.id)),
    resend: () => dispatch(resendContact(ownProps.id, ownProps.Name, ownProps.Number))
})

export default connect(
    null,
    mapDispatchToProps
)(Phone)