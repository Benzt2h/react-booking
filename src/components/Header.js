import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-primary">จองโต๊ะร้านอาหาร</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        login
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;