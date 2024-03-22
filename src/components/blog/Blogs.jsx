import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h4>Loading...</h4>;

  if (errors) return <h4>Error...</h4>;

  return <div></div>;
};

export default Blogs;
