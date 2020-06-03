import React from "react";

export default class FollowersCard extends React.Component {

    render() {

        return (
            <div>

                {this.props.followersData.map(item =>


                    <div>
                        <p>Name: {item.login}</p>
                        <p>URL: {item.html_url}</p>
                    </div>


                )}

            </div>
        )


    }
}