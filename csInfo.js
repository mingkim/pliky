import React from "react";
export default React.createClass({

    getInitialState: function(){
        return {
        };
    },

    componentWillMount: function() {
        this.setState({data: this.props.data})
    },

    componentDidMount : function(){

    },

    render : function(){
        return (
            <div>
                <div className="profieNoticeTitle right-align"><span>커미</span></div>
                <div className="commitionDesc">
                    <div className="container">
                        <p>{this.props.data.summary}</p>
                    </div>
                </div>
                <div className="commitionInfo right">
                    <a href="#" className="fa-stack fa-lg black-text">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-eye fa-stack-1x fa-inverse"></i>
                    </a>
                    <span>{this.props.data.viewNum}</span>
                    <a href="#" className="fa-stack fa-lg black-text" onClick={this.props.heartPlus}>
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i id="heartIcon" className="fa fa-heart fa-stack-1x fa-inverse red-text"></i>
                    </a>
                    <span>{this.props.data.heart}</span>
                    <a href="#" className="fa-stack fa-lg black-text">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-bell fa-stack-1x fa-inverse"></i>
                    </a><span>알림 설정</span>
                </div>
            </div>
        );
    }
})