import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function User({ getUser, loading, user: { name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable } }) {

  const { login } = useParams();
  useEffect(() => {
    getUser(login);
  }, []);
    const { loading } = this.props;
    if (loading) return <Spinner/>

  return <div>{name}{avatar_url}</div>;
}

export default User;
