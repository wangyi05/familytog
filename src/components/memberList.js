import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as memberActions from '../actions/memberActions';
import PropTypes from 'prop-types';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class memberList extends React.Component {
    componentWillMount() {
        this.props.memberActions.fetchMember();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
        if(!this.props.member){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                    {
                        this.props.member.map((item, index) => {
                            return (
                                this.renderData(item)
                            );
                        })
                    }
                    <RaisedButton label="Default" />
                </div>

            )
        }
    }
}

memberList.propTypes = {
    memberActions: PropTypes.object,
    member: PropTypes.array
};

function mapStateToProps(state) {
    return {
        member: state.member
    };
}

function mapDispatchToProps(dispatch) {
    return {
       memberActions: bindActionCreators(memberActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memberList);