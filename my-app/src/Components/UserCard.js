import React from "react";

export default class UserCard extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img alt="lol" src={this.props.userData.avatar_url} />
                    <p>Name: {this.props.userData.name}</p>
                    <p>URL: {this.props.userData.html_url}</p>
                    <p>Bio: {this.props.userData.bio}</p>
                    <p>Followers: {this.props.userData.followers}</p>
                    <p>Following: {this.props.userData.following}</p>
                </div>
            </div>



        )

    }

}